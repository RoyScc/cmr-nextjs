"use client";

import React from "react";
import profesionales from "@/lib/profesionales";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function PerfilProfesional() {
  const { id } = useParams();
  const doctor = profesionales.find((doc) => String(doc.id) === String(id));

  if (!doctor) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Profesional no encontrado
        </h1>
        <Link href="/" className="mt-4 text-cmr-azul hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] py-12 px-6">
      <div className="max-w-lg mt-8 mx-auto rounded-2xl shadow-lg bg-white border border-gray-100 overflow-hidden">
        <div className="h-1 bg-cmr-naranja" />

        <div className="p-8 flex flex-col items-center text-center">
          <img
            src={doctor.foto}
            alt={doctor.nombre}
            className="w-24 h-24 rounded-full object-cover border-4 border-cmr-celeste-bg mb-5"
          />

          <span className="text-xs font-semibold tracking-wider uppercase text-cmr-naranja mb-1">
            {doctor.especialidad}
          </span>

          <h1 className="text-2xl font-bold text-cmr-azul mb-1">
            {doctor.nombre}
          </h1>

          <span className="text-sm text-gray-500 mb-5">
            Matrícula {doctor.matricula}
          </span>

          <p className="text-gray-600 leading-relaxed mb-8">{doctor.desc}</p>

          <Link href="/turnos" className="w-full">
            <button
              type="button"
              className="w-full bg-cmr-naranja text-white font-semibold py-3 px-6 rounded-xl"
            >
              Solicitar Turno
            </button>
          </Link>

          <Link
            href="/"
            className="mt-5 text-sm text-gray-500 hover:text-cmr-azul"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
