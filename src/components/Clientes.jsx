'use client';

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './clientes.module.css';

const reviews = [
    { name: 'Monica Monica', date: '2025-02-05', rating: 5, review: 'Muy buen servicio y asesoría. Profesionales de confianza.' },
    { name: 'Camila Reboulaz', date: '2024-12-27', rating: 5, review: 'Excelente atención, resolvieron mi trámite rápido y sin problemas.' },
    { name: 'Julio Berardi', date: '2024-12-27', rating: 5, review: 'Muy expeditivos, recomiendo sus servicios.' },
    { name: 'Ana López', date: '2025-01-15', rating: 5, review: 'Resolvieron mi caso laboral de forma clara y rápida. Muy recomendables.' },
    { name: 'Martín Fernández', date: '2024-11-20', rating: 4, review: 'Muy buena gestión. El trato fue cordial y eficiente.' },
    { name: 'Laura Gómez', date: '2024-12-10', rating: 5, review: 'Me ayudaron con un tema complejo, siempre atentos y claros.' },
    { name: 'Carlos Ruiz', date: '2025-01-02', rating: 5, review: 'Servicio impecable, abogados muy profesionales.' },
    { name: 'Sofía Martínez', date: '2024-12-18', rating: 5, review: 'Muy confiables y responsables. Recomiendo sus servicios.' },
];

const totalReviews = 37;


const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

function StarsRow({ value = 5, size = 16 }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (value >= i) {
            stars.push(<FaStar key={i} size={size} className={`${styles.star} ${styles.starGold}`} />);
        } else if (value >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} size={size} className={`${styles.star} ${styles.starGold}`} />);
        } else {
            stars.push(<FaRegStar key={i} size={size} className={`${styles.star} ${styles.starEmpty}`} />);
        }
    }
    return <div className={styles.starsRow}>{stars}</div>;
}

export default function Resenias() {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'LegalService',
        name: 'Estudio Jurídico Juan Cruz Zucco',
        image: '/juan-cruz-zucco.jpg',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Mitre 1291',
            addressLocality: 'Chajarí',
            addressRegion: 'Entre Ríos',
            addressCountry: 'AR',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: avgRating.toFixed(1),
            bestRating: '5',
            worstRating: '1',
            reviewCount: reviews.length,
        },
        review: reviews.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.name },
            datePublished: r.date,
            reviewBody: r.review,
            reviewRating: {
                '@type': 'Rating',
                ratingValue: r.rating,
                bestRating: '5',
                worstRating: '1',
            },
        })),
    };

    return (
        <section className={styles.reviewsSection}>
            <div className="container" id='clientes'>
                <div className={styles.reviewsHeader} >
                    <h2>Estudio Jurídico Juan Cruz Zucco</h2>
                    <div className={styles.reviewsHeaderStars}>
                        <StarsRow value={avgRating} size={20} />
                        <span className={styles.count}>
                            {avgRating.toFixed(1)} de 5 ({totalReviews} reseñas Google)
                        </span>
                    </div>
                    <br />
                    <a
                        href="https://www.google.com/maps/place/Juan+Cruz+Zucco+-+Abogado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.writeBtn}
                    >
                        Escribir una reseña
                    </a>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: true }}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                    }}
                >
                    {reviews.map((r, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={styles.reviewCard}>
                                <div className={styles.reviewHeader}>
                                    <div className={styles.avatar}>{r.name.charAt(0)}</div>
                                    <div className={styles.info}>
                                        <p className="name">{r.name}</p>
                                        <p className="date">{r.date}</p>
                                    </div>
                                    <span className={styles.badge}>Google</span>
                                </div>
                                <StarsRow value={r.rating} size={16} />
                                <p className={styles.text}>{r.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* JSON-LD para SEO (Rich Snippets) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </section>
    );
}
