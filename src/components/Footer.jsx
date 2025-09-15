"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { Montserrat } from "next/font/google";
import {
    FaWhatsapp,
    FaTelegramPlane,
    FaLinkedin,
    FaInstagram,
    FaMapMarkerAlt,
    FaEnvelope,
} from "react-icons/fa";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: "700",
});

export default function Footer() {
    return (
        <footer className={`${styles.footer} text-white`}>
            <div
                className={`container d-flex flex-column flex-md-row justify-content-between align-items-center ${montserrat.className}`}
            >
                {/* Logo + Nombre */}
                <div className="d-flex align-items-center mb-3 mb-md-0">
                    <img
                        src="/logo-blanco.webp"
                        alt="Logo Estudio Jurídico Juan Cruz Zucco"
                        className={styles.logo}
                    />
                    <span className={styles.brand}>Estudio Jurídico</span>
                </div>

                {/* Redes sociales */}
                <div className="d-flex gap-3 flex-wrap justify-content-center">
                    <Link
                        href="https://wa.me/5493456510725"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaWhatsapp />
                    </Link>
                    <Link
                        href="https://t.me/+543456510725"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaTelegramPlane />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/juan-cruz-zucco-5177b5170/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaLinkedin />
                    </Link>
                    <Link
                        href="https://www.instagram.com/juancruzzucco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaInstagram />
                    </Link>
                    <Link
                        href="https://maps.app.goo.gl/TWCx1Zp9iPAMTGjN8?g_st=iw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaMapMarkerAlt />
                    </Link>
                    <Link
                        href="mailto:zuccojuancruz@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FaEnvelope />
                    </Link>
                </div>
            </div>

            {/* Copy */}
            <div className="text-center mt-3 small">
                © {new Date().getFullYear()} Estudio Jurídico Juan C. Zucco. Todos los
                derechos reservados.
            </div>
            <hr />
            <div className="text-center mt-3 small">
                Creado por <a href="https://wa.me/+5493412275598" target="_blank" className={styles.juanma}> JuanmaToniolo
                </a>
            </div>
        </footer>
    );
}
