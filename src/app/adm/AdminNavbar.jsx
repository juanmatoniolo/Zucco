'use client';

export default function AdminNavbar({ activeTab, setActiveTab, noLeidosCount, onLogout }) {
    return (
        <div className="mb-4">
            {/* Primera fila: Bienvenida + Logout */}
            <nav className="navbar navbar-light bg-white shadow-sm rounded px-3 mb-2 w-100 p-2 d-flex g-2">
                <span className="navbar-brand fw-bold text-success w-50 ">
                    Bienvenido Dr. Zucco
                </span>
                <button onClick={onLogout} className=" btn btn-outline-danger ">
                    Cerrar sesión
                </button>
            </nav>

            {/* Segunda fila: Tabs */}
            <div className="nav nav-tabs bg-light rounded shadow-sm px-3">
                <button
                    className={`nav-link ${activeTab === 'noLeidos' ? 'active text-success fw-bold' : ''}`}
                    onClick={() => setActiveTab('noLeidos')}
                >
                    🔔 No Leídos
                    {noLeidosCount > 0 && (
                        <span className="badge bg-danger ms-2">{noLeidosCount}</span>
                    )}
                </button>

                <button
                    className={`nav-link ${activeTab === 'leidos' ? 'active text-success fw-bold' : ''}`}
                    onClick={() => setActiveTab('leidos')}
                >
                    📖 Leídos
                </button>
            </div>
        </div>
    );
}
