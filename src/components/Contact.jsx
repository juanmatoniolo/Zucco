'use client';

import styles from '../app/page.module.css';

export default function Contact() {
    return (
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
                <span>Enviar mensaje</span>
            </a>
        </section>
    );
}