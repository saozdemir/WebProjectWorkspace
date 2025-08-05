/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
import React, {createContext, type ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import api, {setAppAccessToken, setInitialCsrfToken} from '../api/axiosConfig';
import eventBus from '../api/eventBus';
import {EventTypes} from "../api/eventTypes.ts"; // mitt ile güncellenmiş eventBus

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

interface ResponseType {
    status: number;
    payload: {
        accessToken: string;
    };
    csrfToken: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    const logout = useCallback(() => {
        setAppAccessToken(null);
        setInitialCsrfToken(null);
        setIsAuthenticated(false);
        navigate('/login');
        console.log("Logout işlemi tamamlandı, /login sayfasına yönlendirildi.");
    }, [navigate]);

    useEffect(() => {
        eventBus.on(EventTypes.FORCE_LOGOUT, logout);

        return () => {
            eventBus.off(EventTypes.FORCE_LOGOUT, logout);
        };
    }, [logout]);

    useEffect(() => {
        const tryRefreshToken = async () => {
            try {
                const response = await api.post("/refresh-token");
                const responseData: ResponseType = response.data;

                setAppAccessToken(responseData.payload.accessToken);
                setInitialCsrfToken(responseData.csrfToken);
                setIsAuthenticated(true);
                console.log("Sessiz token yenileme başarılı.");
            } catch (error) {
                console.log("Geçerli bir refresh token bulunamadı, giriş yapılması gerekiyor.");
                setIsAuthenticated(false);
            } finally {
                setIsLoading(false);
            }
        };

        tryRefreshToken();
    }, []);

    const login = async (username: string, password: string) => {
        try {
            const user = { username, password, selectedRole: "ADMIN" };
            const response = await api.post("/authenticate", user);
            const responseData: ResponseType = response.data;

            if (responseData?.payload?.accessToken) {
                setAppAccessToken(responseData.payload.accessToken);
                setInitialCsrfToken(responseData.csrfToken);
                setIsAuthenticated(true);
                eventBus.emit(EventTypes.LOGIN_SUCCESS, { username }); // Emit login success event
                navigate('/');
            } else {
                throw new Error("Login yanıtı beklenilen formatta değil.");
            }
        } catch (error) {
            console.error('Login hatası!', error);
            alert('Kullanıcı adı veya şifre hatalı.');
        }
    };

    const value = {
        isAuthenticated,
        isLoading,
        login,
        logout,
    };

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
