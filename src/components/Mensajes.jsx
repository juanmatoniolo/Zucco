'use client';

export default function Mensajes({ mensajes, onMarkRead, onDelete, onLogout }) {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>📩 Mensajes Recibidos</h2>
                <button className="btn btn-outline-danger" onClick={onLogout}>
                    Cerrar sesión
                </button>
            </div>

            {mensajes.length === 0 && (
                <div className="alert alert-info">No hay mensajes todavía.</div>
            )}

            <div className="list-group">
                {mensajes.map((msg) => (
                    <div
                        key={msg.id}
                        className="list-group-item list-group-item-action mb-3 rounded shadow-sm"
                    >
                        <h5>{msg.nombre}</h5>
                        <p>{msg.mensaje}</p>
                        <small className="text-muted">
                            📧 {msg.email} | 📱 {msg.telefono} <br />
                            🗓️ {new Date(msg.fecha).toLocaleString()}
                        </small>

                        <div className="d-flex gap-2 mt-2">
                            {msg.leido === 0 && (
                                <button
                                    className="btn btn-sm btn-outline-success"
                                    onClick={() => onMarkRead(msg.id)}
                                >
                                    ✅ Marcar como leído
                                </button>
                            )}
                            {msg.leido === 1 && (
                                <button
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => onDelete(msg.id)}
                                >
                                    🗑 Eliminar
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
