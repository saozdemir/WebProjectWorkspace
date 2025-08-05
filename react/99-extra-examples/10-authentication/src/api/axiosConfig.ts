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
import { getAccessToken, getCsrfToken, refreshToken } from './authService';

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

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                await refreshToken();
                return api(originalRequest);
            } catch {
                eventBus.emit(EventTypes.FORCE_LOGOUT);
            }
        }

        return Promise.reject(error);
    }
);

export default api;