'use client';

import { useState } from 'react';

export default function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER;
        const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

        if (email === adminUser && password === adminPass) {
            const userData = { email };
            localStorage.setItem('adminUser', JSON.stringify(userData));
            onLogin(userData); // ✅ pasamos al padre
        } else {
            setError('❌ Credenciales inválidas');
        }
    };

    return (
        <div className="container my-5">
            <form onSubmit={handleLogin} className="card p-4 shadow">
                <h2 className="text-success mb-3">Iniciar sesión</h2>
                <input
                    type="email"
                    className="form-control mb-2"
                    placeholder="Usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="form-control mb-2"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="btn btn-success w-100">
                    Acceder
                </button>
                {error && <div className="alert alert-danger mt-2">{error}</div>}
            </form>
        </div>
    );
}
