import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cmr-azul w-full text-white p-5 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center p-5 gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
          <img
            src="/imagotipo-cmr.svg"
            alt="Imagotipo"
            className="ml-1 h-18 py-2"
          />

          <p className="m-0 text-sm opacity-80 flex items-start">
            <i className="pi pi-map-marker mt-1"></i>
            <span className="ml-2">
              Prov. de La Rioja 523, Rio Cuarto, Cordoba
            </span>
          </p>
          <p className="m-0 text-sm opacity-80 flex items-center">
            <i className="pi pi-phone"></i>
            <span className="ml-2">+54 3585 620241</span>
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="https://www.instagram.com/cmr_riocuarto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-cmr-naranja-claro hover:-translate-y-1 transition-all duration-300"
            aria-label="Instagram"
          >
            <i className="pi pi-instagram"></i>
          </Link>

          <Link
            href="mailto:info@cmr.com"
            className="text-2xl text-white hover:text-cmr-naranja-claro hover:-translate-y-1 transition-all duration-300"
            aria-label="Email"
          >
            <i className="pi pi-envelope"></i>
          </Link>
        </div>
      </div>

      <div className="w-full h-px bg-white/30 my-4"></div>

      <div className="text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} Centro Médico Respiratorio. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
