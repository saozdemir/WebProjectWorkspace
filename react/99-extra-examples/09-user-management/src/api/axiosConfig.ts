import axios, {type AxiosInstance} from "axios";
import { useAuth } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";
import eventBus from './eventBus'; // Event Bus'ı import ediyoruz.

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */

let csrfToken: string | null = null;
let accessToken: string | null = null;

const api: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
});

interface PayloadType{
    accessToken: string;
}

interface ResponseType{
    status:number;
    payload:PayloadType;
    csrfToken: string;

}


// --- 1. GİDEN İSTEKLER İÇİN INTERCEPTOR ---
// Her istek gönderilmeden önce bu fonksiyon çalışır.
api.interceptors.request.use((config) => {
        // const accessToken:string|null = localStorage.getItem("accessToken");
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
        if (csrfToken) {
            // --- DÜZELTİLEN SATIR ---
            // Header adı, Spring Security'nin beklediği standart olan
            // X-XSRF-TOKEN olarak güncellendi.
            config.headers["X-XSRF-TOKEN"] = csrfToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// --- 2. GELEN CEVAPLAR İÇİN INTERCEPTOR ---

// Token yenileme sürecinin devam edip etmediğini takip eden bayrak.
let isRefreshing = false;
// Token yenilenirken başarısız olan istekleri tutan kuyruk.
let failedQueue: { resolve: (value: unknown) => void, reject: (reason?: any) => void }[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};


// Her cevap alındıktan sonra bu fonksiyon çalışır.
api.interceptors.response.use((response) => {
        // Sunucudan gelen cevapta yeni bir csrfToken var mı diye kontrol ediyoruz.
        // Bu yol, sizin RootEntity yapınıza göre değişebilir.
        const newCsrfToken:string | undefined = response.data?.csrfToken; // Daha güvenli hale getirildi.
        if (newCsrfToken) {
            console.log("Yeni CSRF Token:", newCsrfToken);
            // Hafızadaki token'ı yeni değerle güncelliyoruz.
            csrfToken = newCsrfToken;
        }
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // 401 hatası geldiyse VE bu istek daha önce denenmediyse token yenileme sürecini başlat.
        if (error.response?.status === 401 && !originalRequest._retry) {

            if (isRefreshing) {
                // Zaten bir yenileme işlemi devam ediyorsa, bu isteği kuyruğa al ve bekle.
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    return axios(originalRequest);
                }).catch(err => {
                    return Promise.reject(err);
                });
            }

            originalRequest._retry = true; // İsteği "denendi" olarak işaretle.
            isRefreshing = true;

            try {
                // Token yenileme endpoint'ini çağır.
                const refreshResponse: ResponseType = await api.post('/refresh-token');
                const newAccessToken: string = refreshResponse.payload.accessToken;
                const csrfToken: string = refreshResponse.csrfToken;
                setAppAccessToken(newAccessToken);
                setInitialCsrfToken(csrfToken); // Yeni CSRF token'ı hafızaya al.
                // const refreshResponse = await api.post('/refresh-token');
                // const { accessToken: newAccessToken } = refreshResponse.data.data;


                if (!newAccessToken) {
                    throw new Error("Yenileme yanıtında accessToken bulunamadı.");
                }
                setAppAccessToken(newAccessToken);
                if (csrfToken) {
                    setInitialCsrfToken(csrfToken);
                }

                // Yeni accessToken'ı localStorage'a kaydet.
                // localStorage.setItem('accessToken', newAccessToken);

                // Axios'un varsayılan başlığını yeni token ile güncelle.
                // api.defaults.headers.common['Authorization'] = 'Bearer ' + newAccessToken;

                // Başarısız olan ilk isteğin başlığını da güncelle.
                // originalRequest.headers['Authorization'] = 'Bearer ' + newAccessToken;

                // Bekleyen diğer isteklere yeni token ile devam etmelerini söyle.
                processQueue(null, newAccessToken);

                // Başarısız olan ilk isteği yeni token ile tekrar gönder.
                return api(originalRequest);

            } catch (refreshError: any) {
                // Eğer refresh-token işlemi de başarısız olursa, kullanıcıyı sistemden at.
                processQueue(refreshError, null);
                console.error("Refresh token geçersiz veya bir hata oluştu. Logout olayı tetikleniyor.", refreshError);
                // localStorage.removeItem("accessToken");
                setAppAccessToken(null);
                setInitialCsrfToken(null);
                eventBus.dispatch("force-logout");
                // const navigate = useNavigate()
                // navigate("/login");
                // csrfToken = null;
                // AuthContext'teki logout fonksiyonunu çağırmak en idealidir.
                // Bu dosya context dışında olduğu için en basit yöntem sayfayı yenilemektir.
                // window.location.href = '/login';
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

// Bu fonksiyonu login olduğumuzda çağıracağız.
export const setInitialCsrfToken = (token: string | null) => {
    csrfToken = token;
};

export const setAppAccessToken = (token: string | null) => {
    accessToken = token;
};

export default api;