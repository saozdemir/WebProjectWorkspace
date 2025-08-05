/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 06 Ağu 2025
 * <p>
 * @description:
 */
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginUser, refreshToken, setTokens } from '../api/authService';
import eventBus from '../api/eventBus';
import { EventTypes } from '../api/eventTypes';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const logout = useCallback(() => {
        setTokens(null, null);
        setIsAuthenticated(false);
        navigate('/login');
    }, [navigate]);

    useEffect(() => {
        eventBus.on(EventTypes.FORCE_LOGOUT, logout);
        return () => eventBus.off(EventTypes.FORCE_LOGOUT, logout);
    }, [logout]);

    useEffect(() => {
        const tryRefresh = async () => {
            try {
                await refreshToken();
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
            }
        };
        tryRefresh();
    }, []);

    const login = async (username: string, password: string) => {
        await loginUser(username, password);
        setIsAuthenticated(true);
        eventBus.emit(EventTypes.LOGIN_SUCCESS, { username });
        navigate('/');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};