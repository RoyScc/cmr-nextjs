import React from "react";
import Link from "next/link";

export default function DejarDeFumarPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-12">
      <section
        className="relative min-h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/dejar-fumar-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-cmr-naranja/75 mix-blend-multiply"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md text-center px-4">
          Programa de Cesación Tabáquica
        </h1>
      </section>

      <section className="p-6 md:p-12 max-w-7xl mx-auto mt-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Recuperá el control de tu respiración
          </h2>
          <p className="text-gray-600 text-lg">
            Un programa estructurado para acompañarte en cada etapa del proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-azul hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-azul text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-search text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              1. Evaluación Inicial
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Analizamos tu grado de dependencia física y psicológica a la
              nicotina, además de evaluar el estado actual de tu función
              pulmonar.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-naranja hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-naranja text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-shield text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              2. Tratamiento Personalizado
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Combinamos terapia cognitivo-conductual con soporte farmacológico
              (si es necesario) para reducir el síndrome de abstinencia de
              forma efectiva.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-t-cmr-celeste hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-cmr-celeste text-white flex items-center justify-center mb-6 shadow-sm">
              <i className="pi pi-star-fill text-2xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              3. Seguimiento a Largo Plazo
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Dejar de fumar es un proceso, no un evento aislado. Te brindamos
              herramientas para evitar recaídas y mantener tus pulmones limpios.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row items-center bg-cmr-celeste-bg rounded-2xl p-8 md:p-10 border border-cmr-celeste/30 shadow-sm gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4 text-cmr-azul">
              Tu decisión de cambiar
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              A los 20 minutos de dejar el cigarrillo, tu presión arterial
              disminuye. A los 3 meses, tu capacidad pulmonar mejora
              notablemente. Nosotros ponemos la ciencia y el equipo; vos ponés la
              voluntad.
            </p>
              <Link href="/turnos">
              <button className="bg-cmr-naranja hover:bg-cmr-naranja-oscuro text-white font-bold py-3 px-8 rounded-full shadow-md transition-colors">
                Iniciar mi tratamiento
              </button>
            </Link>
          </div>

          <div className="hidden md:flex justify-center w-1/3">
            <i
              className="pi pi-ban opacity-20 text-cmr-azul"
              style={{ fontSize: "10rem" }}
            ></i>
          </div>
        </div>
      </section>
    </div>
  );
}
