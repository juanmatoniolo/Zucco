'use client';

import { useState, useEffect } from 'react';
import styles from '../page.module.css';

export default function AdminPage() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [mensajes, setMensajes] = useState([]);
    const [loading, setLoading] = useState(false);

    const adminUser = process.env.NEXT_PUBLIC_ADMIN_USER;
    const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASS;

    // 🔹 Restaurar sesión al cargar la página
    useEffect(() => {
        const savedUser = localStorage.getItem('adminUser');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (email === adminUser && password === adminPass) {
            const userData = { email };
            setUser(userData);
            localStorage.setItem('adminUser', JSON.stringify(userData)); // 🔹 Guardar sesión
            setError('');
        } else {
            setError('❌ Credenciales inválidas');
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem('adminUser'); // 🔹 Borrar sesión
    };

    useEffect(() => {
        if (!user) return;

        const fetchMensajes = async () => {
            setLoading(true);
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/contactos.json`
                );
                const data = await res.json();
                if (data) {
                    const mensajesArray = Object.entries(data).map(([id, value]) => ({
                        id,
                        ...value,
                    }));
                    setMensajes(mensajesArray.reverse());
                } else {
                    setMensajes([]);
                }
            } catch (err) {
                console.error('Error al traer mensajes:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMensajes();
    }, [user]);

    // 🔹 Si no está logueado → mostrar login
    if (!user) {
        return (
            <div className={`container-fluid d-flex align-items-center justify-content-center $`}>
                <div className="row justify-content-center w-100">
                    <div className="col-md-6">
                        <div className="card shadow-lg p-4 border-0 rounded-3">
                            <h2 className="text-center text-success fw-bold mb-3">
                                Iniciar sesión
                            </h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="form-label">Usuario</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="root@zucco.com"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="********"
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success">
                                        Acceder
                                    </button>
                                </div>
                                {error && (
                                    <div className="alert alert-danger mt-3 text-center">
                                        {error}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`container my-5 ${styles.fondoPantalla}`}>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="text-success fw-bold">📩 Mensajes recibidos</h2>
                <button onClick={handleLogout} className="btn btn-outline-danger">
                    Cerrar sesión
                </button>
            </div>

            {loading && <p>Cargando mensajes...</p>}

            {mensajes.length === 0 && !loading && (
                <div className="alert alert-info">No hay mensajes todavía.</div>
            )}

            <div className="list-group">
                {mensajes.map((msg) => (
                    <div
                        key={msg.id}
                        className="list-group-item list-group-item-action mb-3 rounded shadow-sm"
                    >
                        <h5 className="mb-1">{msg.nombre}</h5>
                        <p className="mb-1">{msg.mensaje}</p>
                        <small className="text-muted">
                            📧 {msg.email} | 📱 {msg.telefono} <br />
                            🗓️ {new Date(msg.fecha).toLocaleString()}
                        </small>
                    </div>
                ))}
            </div>
        </div>
    );
}
