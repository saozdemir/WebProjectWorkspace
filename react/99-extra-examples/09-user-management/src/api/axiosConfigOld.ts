/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */

import axios from 'axios';
import eventBus from './eventBus'; // doğru import

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true
});

let accessToken: string | null = null;
let csrfToken: string | null = null;

export function setAppAccessToken(token: string | null) {
    accessToken = token;
}

export function setInitialCsrfToken(token: string | null) {
    csrfToken = token;
}

api.interceptors.request.use(
    (config) => {
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        if (csrfToken && config.method !== 'get') {
            config.headers['X-CSRF-TOKEN'] = csrfToken;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshResponse = await api.post('/refresh-token');
                const { payload, csrfToken: newCsrf } = refreshResponse.data;

                setAppAccessToken(payload.accessToken);
                setInitialCsrfToken(newCsrf);

                originalRequest.headers['Authorization'] = `Bearer ${payload.accessToken}`;
                originalRequest.headers['X-CSRF-TOKEN'] = newCsrf;

                return api(originalRequest);
            } catch (refreshError) {
                // Refresh token süresi de dolmuş, oturumu sonlandır
                console.warn("Refresh token da geçersiz. Kullanıcı çıkış yapmalı.");
                eventBus.dispatch("force-logout"); // ✅ Doğru kullanım burada
            }
        }

        return Promise.reject(error);
    }
);

export default api;
