'use client';

import { useState } from 'react';

export default function MensajeCard({ msg, onMarkRead, onDelete }) {
    const [showModal, setShowModal] = useState(false);

    const whatsappURL = `https://wa.me/${msg.telefono.replace(
        /[^0-9]/g,
        ''
    )}?text=${encodeURIComponent(
        `Hola ${msg.nombre}, recibimos esta consulta tuya: "${msg.mensaje}"`
    )}`;

    const mailtoURL = `mailto:${msg.email}?subject=${encodeURIComponent(
        'Respuesta a tu consulta'
    )}&body=${encodeURIComponent(
        `Hola ${msg.nombre},\n\nRecibimos esta consulta tuya: "${msg.mensaje}"\n\nSaludos,\nEstudio Jurídico Juan Cruz Zucco`
    )}`;

    const handleConfirmDelete = () => {
        onDelete(msg.id);
        setShowModal(false);
    };

    return (
        <>
            {/* Tarjeta del mensaje */}
            <div className="list-group-item mb-3 shadow-sm rounded p-3">
                <h5>{msg.nombre}</h5>
                <p>{msg.mensaje}</p>
                <small className="text-muted d-block mb-2">
                    📧 {msg.email} | 📱 {msg.telefono} <br />
                    🗓️ {new Date(msg.fecha).toLocaleString()}
                </small>

                <div className="d-flex gap-2">
                    <a
                        href={whatsappURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success btn-sm"
                    >
                        📱 WhatsApp
                    </a>
                    <a href={mailtoURL} className="btn btn-primary btn-sm">
                        📧 Email
                    </a>
                    {msg.leido === 0 && (
                        <button
                            onClick={() => onMarkRead(msg.id)}
                            className="btn btn-outline-success btn-sm"
                        >
                            ✅ Marcar leído
                        </button>
                    )}
                    {msg.leido === 1 && (
                        <button
                            onClick={() => setShowModal(true)}
                            className="btn btn-outline-danger btn-sm"
                        >
                            🗑 Eliminar
                        </button>
                    )}
                </div>
            </div>

            {/* Modal de confirmación */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content shadow">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirmar eliminación</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>
                                    ¿Seguro que deseas eliminar el mensaje de <strong>{msg.nombre}</strong>?
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleConfirmDelete}
                                >
                                    Sí, eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Fondo oscuro del modal */}
            {showModal && <div className="modal-backdrop fade show"></div>}
        </>
    );
}
