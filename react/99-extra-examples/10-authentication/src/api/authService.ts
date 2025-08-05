/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 06 Ağu 2025
 * <p>
 * @description:
 */
import api from './axiosConfig';
import {StatusCodes} from "http-status-codes";
// import { jwtDecode } from 'jwt-decode';

let accessToken: string | null = null;
let csrfToken: string | null = null;
let accessTokenExpiresAt: number | null = null;

export function getAccessToken() {
    return accessToken;
}

export function getCsrfToken() {
    return csrfToken;
}
//
// export function getAccessTokenExpiry() {
//     return accessTokenExpiresAt;
// }

export function setTokens(access: string | null, csrf: string | null) {
    accessToken = access;
    csrfToken = csrf;

    // if (access) {
    //     const decoded: { exp: number } = jwtDecode(access); // JWT'den exp alınır
    //     accessTokenExpiresAt = decoded.exp * 1000; // ms cinsinden sakla
    // } else {
    //     accessTokenExpiresAt = null;
    // }
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
    try {
        const response = await api.post('/refresh-token');
        const {payload, csrfToken} = response.data;
        setTokens(payload.accessToken, csrfToken);
    } catch (error:any) {
        if(error?.response?.status === StatusCodes.UNAUTHORIZED) {
            console.error("Refresh Token süresi dolmuş.");
            return false;
        }
        throw error;
    }
}