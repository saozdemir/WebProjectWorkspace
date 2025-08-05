/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
import React, {createContext, useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import api, {setInitialCsrfToken, setAppAccessToken} from '../api/axiosConfig';

const AuthContext = createContext(null);

interface PayloadType{
    accessToken: string;
}

interface ResponseType{
    status:number;
    payload:PayloadType;
    csrfToken: string;

}

export const AuthProvider = ({children}) => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
    const navigate = useNavigate();

    const login = async (username: string, password: string) => {
        try {
            const user = {
                username: username,
                password: password,
                selectedRole: "ADMIN"
            }
            const response = await api.post('/authenticate', user);
            const responseData:ResponseType = response.data;

            localStorage.setItem('accessToken', responseData.payload.accessToken);
            setAccessToken(responseData.payload.accessToken);
            setInitialCsrfToken(responseData.csrfToken); // İlk CSRF token'ını axios interceptor'a bildir.

            navigate('/'); // Giriş başarılı, ana sayfaya yönlendir.
        } catch (error) {
            console.error('Login hatası!', error);
            alert('Kullanıcı adı veya şifre hatalı.');
        }
    };

    const logout = () => {
        localStorage.removeItem('accessToken');
        setAccessToken(null);
        setInitialCsrfToken(null);
        navigate('/login');
    };

    const value = {
        accessToken,
        isAuthenticated: !!accessToken,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};