'use client';

import styles from '../app/page.module.css';

export default function Header() {
    return (
        <div className={styles.bannerWrapper}>
            <img
                src="/abogados5.png"
                alt="Banner Estudio Jurídico Juan Cruz Zucco"
                className={styles.bannerImg}
            />
            <div className={styles.bannerOverlay}></div>

            <div className={styles.bannerContent}>
                <h1 className={styles.title}>Estudio Jurídico</h1>
                <p className={styles.subtitle}>
                    Especialistas en <strong>daños y perjuicios</strong>,{' '}
                    <strong>sucesiones</strong>,{' '}
                    <strong>amparos de salud</strong>,{' '}
                    <strong>derecho laboral</strong>,{' '}
                    <strong>accidentes de trabajo</strong>,{' '}
                    <strong>enfermedades profesionales</strong> y{' '}
                    <strong>ciudadanías argentinas</strong>.
                </p>
            </div>
        </div>
    );
}
