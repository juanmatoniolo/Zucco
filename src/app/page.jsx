"use client";

import About from "@/components/About";
import styles from "./page.module.css";
import { Montserrat } from "next/font/google";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Resenias from "@/components/Clientes";
import Contacto from "@/components/Formulario";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});



export default function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Resenias />
      <Contact />
      <br />
      <Contacto />
      <Footer />
      <Analytics/>
    </>
  );
}
