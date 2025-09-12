import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BootstrapClient from "@/components/BootstrapClient";

export const metadata = {
  title: "Estudio Juan C. Zucco",
  description: "Estudio Jurídico Don Zucco",
  themeColor: "#609162",
  icons: {
    icon: [
      { url: "/favicon.ico/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.ico/web-app-manifest-192x192.png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* PWA / iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Estudio Jurídico Zucco" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <BootstrapClient />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
