"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700", // bold
});

export default function Navbar() {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.customNavbar}`}
        >
            <div  className={`container ${montserrat.className}`}>
                <span> <img src="./logo-blanco.webp" className={`logo ${styles.logo}`} alt="Logo estudio juridico Juan Cruz Zucco" /> </span>
                <Link href="/" className={`navbar-brand ${styles.logoText} ${montserrat.className}`}>
                    <span>Estudio Jurídico</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link href="/" className={`nav-link ${styles.navLinkCustom}`}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/nosotros" className={`nav-link ${styles.navLinkCustom}`}>
                                Nosotros
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/servicios" className={`nav-link ${styles.navLinkCustom}`}>
                                Servicios
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/clientes" className={`nav-link ${styles.navLinkCustom}`}>
                                Clientes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/contacto"
                                className={`nav-link btn ms-3 ${styles.contactBtn}`}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
