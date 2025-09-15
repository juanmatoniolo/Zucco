'use client';

import Head from 'next/head';
import styles from './about.module.css';

export default function About() {
  return (
    <main className={`container ${styles.main}`}>
      <Head>
        <title>Sobre Nosotros | Estudio Jurídico Juan Cruz Zucco</title>
        <meta
          name="description"
          content="Estudio jurídico en Chajarí especializado en derecho laboral, sucesiones, daños y perjuicios, amparos de salud y ciudadanías. Atención personalizada en Entre Ríos."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Estudio Jurídico Juan Cruz Zucco" />
      </Head>

      <section className="row mt-5" id="about">
        <div className="col-lg-6 mb-4 text-center text-lg-start">
          <h1 className={styles.mainTitle} >Juan Cruz Zucco</h1>
          <p className={`mt-3 ${styles.description}`}>
            El <strong>Estudio Jurídico</strong> está liderado por el abogado <strong>Juan Cruz Zucco</strong>, joven profesional de Chajarí, egresado de la Universidad de Buenos Aires (UBA). Cuenta con matrícula activa en:
          </p>
          <br />
          <br />
          <p className={styles.matricula}><strong>Entre Ríos:</strong> Mat. Nº 11059 – C.A.E.R.</p>
          <br />
          <p className={styles.matricula}><strong>Ciudad Autónoma de Buenos Aires:</strong> Tº 145
            Fº 170 – C.P.A.C.F.</p>
          <br />
          <p className={styles.matricula}><strong>Matrícula Federal:</strong> Tº 140 Fº 835</p>
        </div>

        <div className="col-lg-6 mb-5 d-flex align-items-center justify-content-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Facultad_de_Derecho_%288617641510%29.jpg"
            alt="Universidad de Buenos Aires - Facultad de Derecho"
            className={styles.profileImage}
          />
        </div>
     <h2 className={"text-center pb-4 " + styles.mainTitle} id="servicios">
  ¿A qué nos dedicamos?
</h2>

        {[{
          title: 'Derecho Laboral',
          text: 'Defensa en despidos injustificados, reclamos por accidentes de trabajo y enfermedades profesionales. Atención personalizada en Chajarí y toda Entre Ríos.'
        }, {
          title: 'Daños y Perjuicios',
          text: 'Asesoría en casos de accidentes de tránsito, responsabilidad civil y reclamos por daños materiales o morales.'
        }, {
          title: 'Sucesiones y Herencias',
          text: 'Trámite ágil de sucesión en Entre Ríos, asesoramiento en herencias y representación judicial en sucesiones en Chajarí.'
        }, {
          title: 'Amparos de Salud',
          text: 'Iniciamos amparos de salud para garantizar tu derecho a tratamientos médicos, medicamentos y prestaciones negadas por obras sociales o prepagas.'
        }, {
          title: 'Ciudadanías Argentinas',
          text: 'Tramitamos ciudadanía argentina y residencia legal, garantizando procesos rápidos y seguros para personas de todo el mundo.'
        }].map(({ title, text }, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className={styles.cardSection}>
              <h2 className={styles.sectionTitle}>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        ))}

        <div className="col-12 mt-4">
          <div className={styles.locationBox}>
            <h2 className={styles.sectionTitle}>Ubicación y Horarios</h2>
            <p>
              Atendemos en nuestro estudio ubicado en <strong>Mitre 1291, Chajarí, Entre Ríos</strong>.<br />
              <strong>Horarios:</strong> Lunes a Viernes de <strong>8:00 a 12:00</strong> y <strong>16:00 a 19:00</strong> hs.
            </p>
            <a
              href="https://www.google.com/maps/dir/-30.7500584,-57.9883581/Juan+Cruz+Zucco+-+Abogado,+Mitre+1291,+E3228+Chajar%C3%AD,+Entre+R%C3%ADos/@-30.7555527,-57.9976122,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x95ad0de317150caf:0x5c3c8751e3ca9025!2m2!1d-57.985283!2d-30.7613208"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mt-2"
            >
              ¿Cómo llegar al estudio?
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
