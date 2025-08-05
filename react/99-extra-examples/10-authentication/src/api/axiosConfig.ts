/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 06 Ağu 2025
 * <p>
 * @description:
 */
import axios from 'axios';
import eventBus from './eventBus';
import { EventTypes } from './eventTypes';
import { getAccessToken, getCsrfToken, setTokens } from './authService';
import {StatusCodes} from "http-status-codes";

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    const csrfToken = getCsrfToken();

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    if (csrfToken && config.method !== 'get') {
        config.headers['X-XSRF-TOKEN'] = csrfToken;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // refresh-token icin tekrar tetiklenmemeli
        const isRefreshRequest = originalRequest.url?.includes('/refresh-token');

        if (error.response?.status === StatusCodes.UNAUTHORIZED && !originalRequest._retry && !isRefreshRequest) {
            console.warn("Access token expired, yenileniyor...");
            originalRequest._retry = true;

            try {
                // refreshToken cagrisi api uzerinden degil direkt axios ile
                const res = await axios.post('http://localhost:8080/refresh-token', {}, { withCredentials: true });
                const { payload, csrfToken } = res.data;
                setTokens(payload.accessToken, csrfToken);
                console.info("Access token yenilendi.");

                // tekrar deneyelim
                return api(originalRequest);
            } catch (e) {
                console.warn('Refresh token expired veya hatali. Oturum kapatiliyor.');
                eventBus.emit(EventTypes.FORCE_LOGOUT);
            }
        }

        return Promise.reject(error);
    }
);

export default api;