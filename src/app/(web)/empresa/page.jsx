// src/app/(web)/empresa/page.jsx
import React from 'react';

export default function EmpresaPage() {
  return (
    <div className="min-h-[80vh] bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-[#d66f2c]">Sobre Nosotros</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#295b76] mb-4">Centro Médico Respiratorio</h1>
          <div className="w-24 h-1 rounded-full mx-auto bg-[#d66f2c] mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una institución líder en Río Cuarto, dedicada exclusivamente al cuidado, diagnóstico y tratamiento integral de la salud respiratoria de nuestra comunidad.
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-t-4 border-[#295b76] hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#e8f4fa] rounded-full flex items-center justify-center mb-6">
              <i className="pi pi-bullseye text-3xl text-[#295b76]"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-gray-600 leading-relaxed">
              Brindar una atención médica de excelencia, empática y personalizada, enfocada en mejorar la calidad de vida de nuestros pacientes mediante diagnósticos precisos y tratamientos innovadores para enfermedades cardiorrespiratorias.
            </p>
          </div>

         
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-t-4 border-[#d66f2c] hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-[#fdf0e8] rounded-full flex items-center justify-center mb-6">
              <i className="pi pi-eye text-3xl text-[#d66f2c]"></i>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
            <p className="text-gray-600 leading-relaxed">
              Consolidarnos como el centro médico de referencia en la provincia y el país en patologías respiratorias, destacando por nuestra tecnología de vanguardia, nuestro compromiso ético y la formación continua de nuestro equipo humano.
            </p>
          </div>
        </div>

        
        <div className="bg-gradient-to-br from-[#295b76] to-[#4782a1] rounded-3xl p-10 md:p-16 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            <div className="flex flex-col items-center">
              <i className="pi pi-heart text-5xl text-[#89cfe5] mb-4 hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-2">Empatía</h3>
              <p className="text-blue-100 text-sm">Tratamos a cada paciente con la calidez y el respeto que merece nuestra familia.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="pi pi-star text-5xl text-[#89cfe5] mb-4 hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-2">Excelencia</h3>
              <p className="text-blue-100 text-sm">Buscamos la mejora continua en todas nuestras prácticas médicas y administrativas.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="pi pi-users text-5xl text-[#89cfe5] mb-4 hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-2">Compromiso</h3>
              <p className="text-blue-100 text-sm">Dedicación total a promover el bienestar y la salud pública de nuestra comunidad.</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="pi pi-shield text-5xl text-[#89cfe5] mb-4 hover:scale-110 transition-transform"></i>
              <h3 className="text-xl font-bold mb-2">Ética</h3>
              <p className="text-blue-100 text-sm">Transparencia, honestidad e integridad como pilares de nuestro accionar profesional.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}