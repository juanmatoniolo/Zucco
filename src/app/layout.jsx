import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Estudio Juan C. Zucco",
  description: "Estudio Juridico Don Zucco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Estudio Juridico Zucco " />
      <body className="">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
