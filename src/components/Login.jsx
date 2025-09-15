'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // 👈 importamos router

export default function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter(); // 👈 inicializamos

    const handleLogin = (e) => {
        e.preventDefault();

        const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER;
        const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

        if (email === adminUser && password === adminPass) {
            onLogin({ email });

            // ✅ redirigir al panel admin
            router.push('/adm');
        } else {
            setError('Credenciales inválidas');
        }
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h2 className="text-center mb-3">Acceso Root</h2>
                        {error && <div className="alert alert-danger">{error}</div>}

                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Contraseña</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-success w-100">
                                Ingresar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
