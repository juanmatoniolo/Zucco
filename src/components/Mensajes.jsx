'use client';

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { ref, onValue } from 'firebase/database';

export default function Mensajes({ onLogout }) {
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        const contactosRef = ref(db, 'contactos');
        const unsubscribe = onValue(contactosRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const lista = Object.entries(data).map(([id, val]) => ({
                    id,
                    ...val,
                }));
                setMensajes(lista.reverse());
            } else {
                setMensajes([]);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <section className="container my-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>📩 Mensajes Recibidos</h2>
                <button className="btn btn-outline-danger" onClick={onLogout}>
                    Cerrar sesión
                </button>
            </div>

            {mensajes.length === 0 ? (
                <p>No hay mensajes todavía.</p>
            ) : (
                <div className="list-group">
                    {mensajes.map((msg) => (
                        <div key={msg.id} className="list-group-item">
                            <h5 className="mb-1">{msg.nombre}</h5>
                            <p className="mb-1">{msg.mensaje}</p>
                            <small>
                                <strong>Email:</strong> {msg.email} |{' '}
                                <strong>Tel:</strong> {msg.telefono} |{' '}
                                <strong>Fecha:</strong> {new Date(msg.fecha).toLocaleString()}
                            </small>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
