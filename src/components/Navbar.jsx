"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

export default function Navbar() {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top ${styles.customNavbar}`}
    >
      <div className={`container d-flex align-items-center justify-content-between ${montserrat.className}`}>

        {/* Logo + texto */}
        <div className="d-flex align-items-center">
          <img
            src="/logo-blanco.webp"
            className={`me-2 ${styles.logo}`}
            alt="Logo estudio jurídico Juan Cruz Zucco"
          />
          <Link href="/" className={`navbar-brand mb-0 h1 ${styles.logoText}`}>
            Estudio Jurídico
          </Link>
        </div>

        {/* Botón toggle */}
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

        {/* Menú */}
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
