/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
import React, {useEffect, useState} from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api/axiosConfig';

function HomePage() {
    const { logout } = useAuth();
    const [userData, setUserData] = useState(null);

    const handleGetData = async () => {
        try {
            // Interceptor'lar token'ları otomatik ekleyeceği için sadece isteği atıyoruz.
            const response = await api.get('/api/user-management/user/list/1'); // Örnek bir korumalı endpoint
            console.log("GET : " + response.data.data)
            setUserData(response.data);
        } catch (error) {
            console.error('Veri alınamadı!', error);
            setUserData('Hata: Veri alınamadı.');
        }
    };

    const handleUpdateData = async () => {
        try {
            const response = await api.post('/api/user-management/user/test-user-authentication', { firstName: 'Yeni Ad', lastName:"Yeni Soyad" }); // Örnek bir POST isteği
            console.log(response.data.payload)
            alert("POST başarılı! Interceptor'lar yeni CSRF token'ını arka planda güncelledi.");
        } catch (error) {
            console.error('Güncelleme hatası!', error);
        }
    };

    return (
        <div>
            <h2>Ana Sayfa (Korumalı Alan)</h2>
            <button onClick={handleGetData}>Korumalı Veri Getir</button>
            <button onClick={handleUpdateData}>(POST isteği)</button>
            <button onClick={logout}>Çıkış Yap</button>
            {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
        </div>
    );
}
export default HomePage;
