'use client';

import { useState, useEffect } from 'react';
import LoginForm from '@/components/LoginForm'; // ✅ ya está en components
import AdminNavbar from './AdminNavbar';
import MensajeCard from './MensajeCard';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [mensajes, setMensajes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('noLeidos');

  // 🔹 Restaurar sesión
  useEffect(() => {
    const savedUser = localStorage.getItem('adminUser');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('adminUser');
  };

  // 🔹 Fetch mensajes
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

  // 🔹 Marcar leído
  const marcarLeido = async (id) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/contactos/${id}.json`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ leido: 1 }),
        }
      );
      setMensajes((prev) =>
        prev.map((msg) => (msg.id === id ? { ...msg, leido: 1 } : msg))
      );
    } catch (err) {
      console.error('Error al marcar como leído:', err);
    }
  };

  // 🔹 Eliminar mensaje leído
  const eliminarMensaje = async (id) => {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL}/contactos/${id}.json`,
        { method: 'DELETE' }
      );
      setMensajes((prev) => prev.filter((msg) => msg.id !== id));
    } catch (err) {
      console.error('Error al eliminar mensaje:', err);
    }
  };

  if (!user) return <LoginForm onLogin={setUser} />;

  const noLeidos = mensajes.filter((m) => m.leido === 0);
  const leidos = mensajes.filter((m) => m.leido === 1);

  return (
    <div className="container my-4">
      <AdminNavbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        noLeidosCount={noLeidos.length}
        onLogout={handleLogout}
      />

      {loading && <p>Cargando mensajes...</p>}

      {/* Mostrar mensajes según tab */}
      {activeTab === 'noLeidos' ? (
        <>
          {noLeidos.length === 0 ? (
            <div className="alert alert-info">No hay mensajes nuevos.</div>
          ) : (
            noLeidos.map((msg) => (
              <MensajeCard key={msg.id} msg={msg} onMarkRead={marcarLeido} />
            ))
          )}
        </>
      ) : (
        <>
          {leidos.length === 0 ? (
            <div className="alert alert-secondary">No hay mensajes leídos aún.</div>
          ) : (
            leidos.map((msg) => (
              <MensajeCard key={msg.id} msg={msg} onDelete={eliminarMensaje} />
            ))
          )}
        </>
      )}
    </div>
  );
}
