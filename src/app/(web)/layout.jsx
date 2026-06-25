// src/app/(web)/layout.js
import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PreLoader from "../../components/PreLoader";
import "primeicons/primeicons.css";

export default function PublicLayout({ children }) {
  return (
    <div className="flex w-full flex-col min-h-screen bg-white">
      <PreLoader />
      <Header />

      <main className="flex-grow">
        {children}
      </main>

      <Footer />

      {/* Botón de whatsapp */}
      <a
        href="https://wa.me/1234567890"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="pi pi-whatsapp text-3xl"></i>
      </a>
    </div>
  );
}
