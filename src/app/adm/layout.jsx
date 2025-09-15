export const metadata = {
    title: "Panel Admin | Estudio Jurídico",
    description: "Zona privada para administración de mensajes",
};

export default function AdminLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <div className="bg-light min-vh-100 p-4">
                    {children}
                </div>
            </body>
        </html>
    );
}
