import React from "react";
import Link from "next/link";

export default function SaludMentalPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <section className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center">
        <div className="absolute inset-0 bg-cmr-azul/70 mix-blend-multiply"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md text-center px-4">
          Salud Mental y Apoyo Psicológico
        </h1>
      </section>

      <section className="p-6 md:p-12 max-w-7xl mx-auto mt-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Un enfoque integral
          </h2>
          <p className="text-gray-600 text-lg">
            Porque la salud física y la emocional van de la mano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-naranja hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-naranja text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-comments text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Terapia Individual
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Espacios seguros y confidenciales para abordar la ansiedad,
              depresión o estrés, brindándote herramientas para mejorar tu
              bienestar emocional cotidiano.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-celeste hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-celeste text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-users text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Acompañamiento Crónico
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Vivir con una enfermedad respiratoria crónica puede ser desafiante.
              Nuestros profesionales te ayudan a procesar el diagnóstico y
              adaptar tu estilo de vida positivamente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-azul hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-azul text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-heart text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Atención Empática
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos sin prejuicios, escuchando activamente tus necesidades y
              trazando objetivos terapéuticos en conjunto, a tu propio ritmo.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center bg-cmr-naranja-bg rounded-2xl p-8 md:p-10 border border-cmr-naranja/20 shadow-sm gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-cmr-azul">
              Gabinete Psicológico del CMR
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Contamos con un equipo interdisciplinario preparado para
              contenerte. Creemos que sanar el cuerpo requiere estar en paz con
              la mente. Da el primer paso hacia tu bienestar emocional hoy
              mismo.
            </p>
            <Link href="/turnos">
              <button className="bg-cmr-naranja hover:bg-cmr-naranja-oscuro text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors">
                Agendar una sesión
              </button>
            </Link>
          </div>

          <div className="hidden md:flex justify-center w-1/3">
            <i
              className="pi pi-compass opacity-20 text-cmr-naranja"
              style={{ fontSize: "10rem" }}
            ></i>
          </div>
        </div>
      </section>
    </div>
  );
}
