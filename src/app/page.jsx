// pages/_app.js
"use client"
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/progressier.js")
          .then((registration) => {
            console.log("ServiceWorker registrado con éxito:", registration);
          })
          .catch((error) => {
            console.error("Error al registrar el ServiceWorker:", error);
          });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
