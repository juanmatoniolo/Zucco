'use client';

import { useState } from 'react';
import Login from '@/components/Login';
import Mensajes from '@/components/Mensajes';

export default function LoginPage() {
    const [user, setUser] = useState(null);

    return user ? (
        <Mensajes onLogout={() => setUser(null)} />
    ) : (
        <Login onLogin={setUser} /> // ✅ ahora sí le pasamos la prop
    );
}
