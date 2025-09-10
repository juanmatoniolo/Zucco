// pages/_app.js
import { useEffect } from "react";
import "../styles/globals.css";

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
