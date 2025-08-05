import { useEffect, useRef } from 'react';
import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { refreshToken } from './api/authService';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import './App.css';

// Giriş yapılmamışsa login'e yönlendiren korumalı route componenti
function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
    // const location = useLocation();
    // const { logout } = useAuth();
    // const lastChecked = useRef<number | null>(null);
    // const logoutCalled = useRef(false); // ✅ logout sadece bir kez çağrılsın diye

    // useEffect(() => {
    //     const checkTokenAndRefresh = async () => {
    //         const expiry = getAccessTokenExpiry();
    //
    //         if (!expiry) return;
    //
    //         const now = Date.now();
    //         const refreshThreshold = 60 * 1000; // 1 dakika
    //
    //         // Aynı route içinde 30 saniye içinde zaten kontrol edildiyse tekrar etme
    //         if (lastChecked.current && now - lastChecked.current < 30 * 1000) return;
    //
    //         lastChecked.current = now;
    //
    //         if (expiry - now < refreshThreshold) {
    //             try {
    //                 await refreshToken(); // refresh işlemi
    //                 console.info("Access token süresi yaklaştı, yenilendi.");
    //             } catch (e) {
    //                 console.warn("Refresh token süresi dolmuş. Oturum sonlandırılıyor.");
    //
    //                 if (!logoutCalled.current) {
    //                     logoutCalled.current = true; // ❗ logout sadece bir kere çağrılsın
    //                     logout();
    //                 }
    //             }
    //         }
    //     };
    //
    //     checkTokenAndRefresh();
    // }, [location]);

    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    );
}

export default App;