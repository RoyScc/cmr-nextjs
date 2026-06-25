"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="bg-white shadow-sm px-4 py-3 flex justify-between items-center sticky top-0 z-50">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <img src="/isotipo-cmr.svg" alt="Isotipo" className="w-8 h-8" />
        <div className="font-bold text-2xl text-cmr-azul">
          Centro Médico Respiratorio
        </div>
      </div>

      <nav className="hidden md:flex gap-5">
        <Link
          href="/"
          className="no-underline text-gray-700 hover:text-cmr-naranja hover:underline decoration-2 underline-offset-4 cursor-pointer font-medium transition-colors"
        >
          Inicio
        </Link>
        <Link
          href="#servicios"
          className="no-underline text-gray-700 hover:text-cmr-naranja hover:underline decoration-2 underline-offset-4 cursor-pointer font-medium transition-colors"
        >
          Nuestros servicios
        </Link>
        <Link
          href="/empresa"
          className="no-underline text-gray-700 hover:text-cmr-naranja hover:underline decoration-2 underline-offset-4 cursor-pointer font-medium transition-colors"
        >
          Empresa
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <i className="pi pi-whatsapp cursor-pointer text-xl hover:text-cmr-naranja transition-colors"></i>
        <Link
          href="https://www.instagram.com/cmr_riocuarto"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="pi pi-instagram cursor-pointer text-xl hover:text-cmr-naranja transition-colors"></i>
        </Link>

        <Button
          onClick={() => router.push("/contacto")}
          label="Contacto"
          className="ml-3 px-6 py-3 font-bold text-white bg-cmr-naranja border-none rounded-2xl shadow-sm hover:shadow-md transition-shadow"
        />
      </div>
    </header>
  );
}
