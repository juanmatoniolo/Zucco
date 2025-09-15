"use client";

import About from "@/components/About";
import styles from "./page.module.css";
import { Montserrat } from "next/font/google";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function HomePage() {
  return (
    <>


      <Header />
      <About />
      <Contact />
      <br />
    </>
  );
}
