/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
import React, { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import api, { setInitialCsrfToken, setAppAccessToken } from '../api/axiosConfig';
import eventBus from '../api/eventBus'; // Event Bus'ı import ediyoruz.

// Tipleri daha net tanımlayalım
interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

interface AuthResponseData {
    accessToken: string;
    csrfToken: string;
}

interface PayloadType{
    accessToken: string;
}

interface ResponseType{
    status:number;
    payload:PayloadType;
    csrfToken: string;

}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // Token'lar artık sadece bu state'te ve axiosConfig hafızasında tutulacak.
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true); // Sayfa yüklenirken sessiz yenileme durumunu takip et
    const navigate = useNavigate();


    // --- YENİ EKLENEN VE SORUNU ÇÖZEN KISIM ---
    useEffect(() => {
        // 'force-logout' olayına abone ol. Olay tetiklendiğinde, logout fonksiyonunu çağır.
        eventBus.on("force-logout", logout);

        // Component DOM'dan kaldırıldığında (unmount), event listener'ı temizle.
        // Bu, hafıza sızıntılarını (memory leaks) önler.
        return () => {
            eventBus.off("force-logout", logout);
        };
    }, []); // Boş dependency array, bu useEffect'in sadece bir kez çalışmasını sağlar.

    // Uygulama ilk yüklendiğinde sessiz token yenilemeyi dene
    useEffect(() => {
        const tryRefreshToken = async () => {
            try {
                const response = await api.post("/refresh-token");
                const responseData:ResponseType = response.data;

                // Token'ları hafızaya al
                setAppAccessToken(responseData.payload.accessToken);
                setInitialCsrfToken(responseData.csrfToken);
                setIsAuthenticated(true);
                console.log("Sessiz token yenileme başarılı.");

            } catch (error) {
                console.log("Geçerli bir refresh token bulunamadı, giriş yapılması gerekiyor.");
                setIsAuthenticated(false);
            } finally {
                // Kontrol bitti, uygulamayı göster
                setIsLoading(false);
            }
        };

        tryRefreshToken();
    }, []); // Boş dependency array, sadece ilk render'da çalışmasını sağlar.

    const login = async (username: string, password: string) => {
        try {
            const user = { username:username, password:password, selectedRole: "ADMIN" };
            const response = await api.post("/authenticate", user);
            const responseData:ResponseType = response.data;

            if (responseData && responseData.payload.accessToken) {
                // Token'ları localStorage yerine hafızaya al.
                setAppAccessToken(responseData.payload.accessToken);
                setInitialCsrfToken(responseData.csrfToken);
                setIsAuthenticated(true);
                navigate('/');
            } else {
                throw new Error("Login yanıtı beklenilen formatta değil.");
            }
        } catch (error) {
            console.error('Login hatası!', error);
            alert('Kullanıcı adı veya şifre hatalı.');
        }
    };

    const logout = () => {
        // Hafızadaki token'ları temizle
        setAppAccessToken(null);
        setInitialCsrfToken(null);
        setIsAuthenticated(false);
        navigate('/login');
    };

    const value = {
        isAuthenticated,
        isLoading,
        login,
        logout,
    };

    // Sessiz yenileme işlemi bitene kadar uygulamayı gösterme
    if (isLoading) {
        return <div>Yükleniyor...</div>;
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
