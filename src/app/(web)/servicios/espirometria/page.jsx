import React from "react";
import Link from "next/link";

export default function EspirometriaPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <section
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/espirometria.png')" }}
      >
        <div className="absolute inset-0 blur-lg bg-cmr-azul/50"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
          Espirometría
        </h1>
      </section>

      <section className="p-6 md:p-12 max-w-7xl mx-auto mt-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            ¿En qué consiste el estudio?
          </h2>
          <p className="text-gray-600 text-lg">
            Información clave para que vengas preparado y tranquilo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-azul hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-azul text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-info-circle text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">¿Qué es?</h3>
            <p className="text-gray-600 leading-relaxed">
              Es una prueba fundamental, rápida e indolora que evalúa la función
              de tus pulmones midiendo cuánto aire inhalas, cuánto exhalas y con
              qué rapidez lo haces.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-naranja hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-naranja text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-chart-line text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              ¿Para qué sirve?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ayuda a diagnosticar afecciones como asma, EPOC y otras
              enfermedades que afectan la respiración. También se usa para
              monitorear si un tratamiento está funcionando.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-celeste hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-celeste text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-check-square text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Preparación
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Se recomienda usar ropa holgada, evitar comidas abundantes antes de
              la prueba y no fumar al menos 4 a 6 horas antes del estudio. Tu
              médico te dará indicaciones específicas.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center bg-cmr-celeste-bg rounded-2xl p-8 md:p-10 border border-cmr-celeste/30 shadow-sm gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-cmr-azul">
              La Espirometría en el CMR
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              En el Centro Médico Respiratorio utilizamos equipos de última
              generación calibrados diariamente. Nuestro equipo de kinesiólogos
              y neumonólogos te guiará paso a paso para asegurar resultados
              precisos en un ambiente cálido y relajado.
            </p>
              <Link href="/turnos">
              <button className="bg-cmr-naranja hover:bg-cmr-naranja-oscuro text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors">
                Solicitar Turno para este estudio
              </button>
            </Link>
          </div>

          <div className="hidden md:flex justify-center w-1/3">
            <i
              className="pi pi-heart-fill opacity-20 text-cmr-celeste"
              style={{ fontSize: "10rem" }}
            ></i>
          </div>
        </div>
      </section>
    </div>
  );
}
