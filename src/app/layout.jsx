import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import BootstrapClient from "../components/BootstrapClient";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "Estudio Jurídico",
  description: "Juan CruzZucco",
  themeColor: "#609162",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* PWA estándar */}
        <meta name="theme-color" content="#609162" />
        <link rel="manifest" href="/manifest.json" />

        {/* Favicon / íconos */}
        <link rel="icon" href="/logo-blanco.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logo-blanco.webp" />

        {/* iOS PWA */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Estudio Jurídico Zucco" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Open Graph para compartir en redes */}
        <meta property="og:title" content="Estudio Jurídico Zucco" />
        <meta
          property="og:description"
          content="Especialistas en daños y perjuicios, sucesiones, amparos de salud, derecho laboral, accidentes de trabajo, enfermedades profesionales y ciudadanías argentinas."
        />
        <meta property="og:image" content="/logo-blanco.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tudominio.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Estudio Jurídico Zucco" />
        <meta
          name="twitter:description"
          content="Especialistas en daños y perjuicios, sucesiones, amparos de salud, derecho laboral, accidentes de trabajo, enfermedades profesionales y ciudadanías argentinas."
        />
        <meta name="twitter:image" content="/logo-blanco.webp" />
      </head>

      <body>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
