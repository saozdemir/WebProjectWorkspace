/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 06 Ağu 2025
 * <p>
 * @description:
 */
import api from './axiosConfig';

let accessToken: string | null = null;
let csrfToken: string | null = null;

export function getAccessToken() {
    return accessToken;
}

export function getCsrfToken() {
    return csrfToken;
}

export function setTokens(access: string | null, csrf: string | null) {
    accessToken = access;
    csrfToken = csrf;
}

export async function login(username: string, password: string) {
    const response = await api.post('/authenticate', {
        username,
        password,
        selectedRole: 'ADMIN',
    });
    const { payload, csrfToken } = response.data;
    setTokens(payload.accessToken, csrfToken);
    return { username };
}

export async function refreshToken() {
    const response = await api.post('/refresh-token');
    const { payload, csrfToken } = response.data;
    setTokens(payload.accessToken, csrfToken);
}