/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axiosConfig';
import { useAuth } from '../context/AuthContext';

function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await api.post('/register', { username, password /* diğer alanlar */ });
            alert('Kayıt başarılı! Lütfen giriş yapın.');
            navigate('/login');
        } catch (error) {
            console.error('Kayıt hatası!', error);
            alert('Kayıt sırasında bir hata oluştu.');
        }
    };
    useEffect(() => {
        logout();
        navigate("/register")
    }, []);

    return (
        <div>
            <h2>Kayıt Ol</h2>
            <form onSubmit={handleRegister}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı Adı" required />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" required />
                <br />
                <button type="submit">Kayıt Ol</button>
            </form>
        </div>
    );
}
export default RegisterPage;