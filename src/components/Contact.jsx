'use client';

import styles from '../app/page.module.css';

export default function Contact() {
    return (
        <section className={`text-center mt-5 ${styles.cta}`} id="contacto">
            <h2 className="pb-2">¿Necesitás asesoría legal?</h2>
            <h5>Contactanos y agendá tu cita</h5>
            <a
                href="https://wa.me/5493456510725"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsBtn}
                aria-label="Enviar mensaje por WhatsApp"
            >
                <img
                    src="/whats.webp"
                    alt="Logo WhatsApp"
                    className={styles.whatsIcon}
                    loading="lazy"
                />
                <span>Enviar mensaje</span>
            </a>
        </section>
    );
}
