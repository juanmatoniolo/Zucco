"use client";

import styles from "./page.module.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function HomePage() {
  return (
    <>
      {/* Banner con texto superpuesto */}
      <div className={styles.bannerWrapper}>
        <img
          src="/abogados6.jpg"
          alt="Banner Estudio Jurídico Juan Cruz Zucco"
          className={styles.bannerImg}
        />
        <div className={styles.bannerOverlay}></div>

        {/* Texto sobre la imagen */}
        <div className={styles.bannerContent}>
          <h1 className={styles.title}>
            Estudio Jurídico
          </h1>
          <p className={styles.subtitle}>
            Especialistas en <strong>daños y perjuicios</strong>,{" "}
            <strong>sucesiones</strong>,{" "}
            <strong>amparos de salud</strong>,{" "}
            <strong>derecho laboral</strong>,{" "}
            <strong>accidentes de trabajo</strong>,{" "}
            <strong>enfermedades profesionales</strong> y{" "}
            <strong>ciudadanías argentinas</strong>.
          </p>
        </div>
      </div>

      <main className={`container ${montserrat.className} ${styles.main}`}>
        <section className="row mt-5">
          <div className="col-md-6 mb-4">
            <h2 className={styles.sectionTitle}>Derecho Laboral</h2>
            <p>
              Defensa en <strong>despidos injustificados</strong>, reclamos por{" "}
              <strong>accidentes de trabajo</strong> y{" "}
              <strong>enfermedades profesionales</strong>. Atención personalizada
              en Chajarí y toda Entre Ríos.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h2 className={styles.sectionTitle}>Daños y Perjuicios</h2>
            <p>
              Asesoría en casos de <strong>accidentes de tránsito</strong>,
              responsabilidad civil y reclamos por{" "}
              <strong>daños materiales o morales</strong>.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h2 className={styles.sectionTitle}>Sucesiones y Herencias</h2>
            <p>
              Trámite ágil de <strong>sucesión en Entre Ríos</strong>,
              asesoramiento en herencias y representación judicial en{" "}
              <strong>sucesiones en Chajarí</strong>.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h2 className={styles.sectionTitle}>Amparos de Salud</h2>
            <p>
              Iniciamos <strong>amparos de salud</strong> para garantizar tu
              derecho a <strong>tratamientos médicos, medicamentos</strong> y
              prestaciones negadas por obras sociales o prepagas.
            </p>
          </div>
          <div className="col-md-6 mb-4">
            <h2 className={styles.sectionTitle}>Ciudadanías Argentinas</h2>
            <p>
              Tramitamos <strong>ciudadanía argentina</strong> y residencia
              legal, garantizando procesos rápidos y seguros para personas de
              todo el mundo.
            </p>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className={`text-center mt-5 ${styles.cta}`}>
          <h4 className="pb-2">¿Necesitás asesoría legal?</h4>
          <a
            href="https://wa.me/5493456510725"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsBtn}
          >
            <img
              src="/whats.webp"
              alt="WhatsApp"
              className={styles.whatsIcon}
            />
            <span>Contactar por WhatsApp</span>
          </a>
        </section>
      </main>
    </>
  );
}
