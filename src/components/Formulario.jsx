'use client';

import { useState } from 'react';

export default function Formulario() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.email || !formData.telefono || !formData.mensaje) {
            alert('⚠️ Por favor completa todos los campos');
            return;
        }

        setLoading(true);
        setErrorMsg('');
        setSuccess(false);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/contactos.json`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        ...formData,
                        fecha: new Date().toISOString(),
                    }),
                }
            );

            const data = await res.json();
            console.log('📡 Firebase response:', res.status, data);

            if (res.ok) {
                setSuccess(true);
                setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
            } else {
                setErrorMsg(`❌ Hubo un error al enviar el formulario (status: ${res.status})`);
            }
        } catch (err) {
            console.error('🚨 Error al conectar con Firebase:', err);
            setErrorMsg('🚨 No se pudo conectar con el servidor');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container my-5" id="contacto">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg p-4 border-0 rounded-3">
                        <h2 className="text-center text-success fw-bold mb-3">Escribinos</h2>
                        <p className="text-center text-muted mb-4">
                            Dejá tus datos y nos pondremos en contacto con vos lo antes posible.
                        </p>

                        <form onSubmit={handleSubmit}>
                            {/* Nombre */}
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label fw-semibold">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Teléfono */}
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label fw-semibold">
                                    Teléfono / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    placeholder="+54 9 3456 123456"
                                    required
                                />
                            </div>

                            {/* Mensaje */}
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label fw-semibold">
                                    Mensaje
                                </label>
                                <textarea
                                    className="form-control"
                                    id="mensaje"
                                    name="mensaje"
                                    rows="4"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            {/* Botón */}
                            <div className="d-grid">
                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg"
                                    disabled={loading}
                                >
                                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                                </button>
                            </div>
                        </form>

                        {/* Mensajes de feedback */}
                        {success && (
                            <div className="alert alert-success mt-3 text-center fw-semibold">
                                ✅ ¡Gracias por contactarnos! Te responderemos pronto.
                            </div>
                        )}
                        {errorMsg && (
                            <div className="alert alert-danger mt-3 text-center fw-semibold">
                                {errorMsg}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
