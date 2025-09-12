// app/components/WhatsAppButton.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/5493456400000"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <Image
        src="/whats.webp" // coloca tu icono en /public/whats.webp
        alt="WhatsApp"
        width={55}
        height={55}
      />
      <style jsx>{`
        .whatsapp-float {
          position: fixed;   /* ✅ fijo siempre en pantalla */
          bottom: 25px;      /* separación desde abajo */
          right: 25px;       /* separación desde la derecha */
          z-index: 1000;     /* por encima de todo */
          border-radius: 50%;
          background: #25d366;
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </Link>
  );
};

export default WhatsAppButton;
