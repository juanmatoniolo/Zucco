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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Estudio Jurídico Zucco" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body>
        <BootstrapClient />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
