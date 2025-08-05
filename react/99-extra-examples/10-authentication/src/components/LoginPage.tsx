/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 05 Aug 2025
 * <p>
 * @description:
 */
import React, {useEffect, useState} from 'react';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login, logout } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        login(username, password);
    };
    useEffect(() => {
        logout()
    }, []);

    return (
        <div>
            <h2>Giriş Yap</h2>
            <form onSubmit={handleLogin}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Kullanıcı Adı" required />
                <br />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Şifre" required />
                <br />
                <button type="submit">Giriş Yap</button>
            </form>
        </div>
    );
}
export default LoginPage;