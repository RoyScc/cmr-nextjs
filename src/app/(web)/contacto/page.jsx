"use client";

import React from "react";

export default function ContactoPage() {
  return (
    <div className="bg-gray-50 min-h-[80vh]">
      <div className="bg-cmr-azul text-white min-h-[50vh] py-12 px-6 flex flex-col items-center justify-center shadow-md">
        <h1 className="text-3xl mt-12 text-center md:text-5xl font-bold mb-4">
          Contacto y Ubicación
        </h1>
        <p className="text-base text-center md:text-2xl opacity-90">
          Nosotros nos encargamos de tu bienestar.
        </p>
      </div>

      <div className="p-6 md:p-12 lg:px-20 max-w-7xl mx-auto mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-18">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-cmr-naranja">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Conócenos</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              En el Centro Médico Respiratorio estamos siempre dispuestos a
              brindarte la mejor atención. Acércate a nuestras instalaciones o
              comunícate por nuestros canales oficiales.
            </p>

            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center rounded-xl w-14 h-14 mr-5 shadow-sm bg-cmr-naranja-bg text-cmr-naranja">
                <i className="pi pi-map-marker text-2xl font-bold"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold m-0 text-gray-800">
                  Dirección
                </h3>
                <p className="m-0 text-gray-600 mt-1">
                  Prov. de La Rioja 225, Río Cuarto, Córdoba
                </p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="flex items-center justify-center rounded-xl w-14 h-14 mr-5 shadow-sm bg-cmr-celeste-bg text-cmr-azul">
                <i className="pi pi-phone text-2xl font-bold"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold m-0 text-gray-800">
                  Teléfono
                </h3>
                <p className="m-0 text-gray-600 mt-1">+54 9 1234 567890</p>
              </div>
            </div>

            <div className="flex items-center mb-2">
              <div className="flex items-center justify-center rounded-xl w-14 h-14 mr-5 shadow-sm bg-cmr-celeste-bg text-cmr-azul">
                <i className="pi pi-clock text-2xl font-bold"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold m-0 text-gray-800">
                  Horarios de Atención
                </h3>
                <p className="m-0 text-gray-600 mt-1">
                  Lunes a Viernes: 08:00 - 18:00 hs
                  <br />
                  Sábados: Cerrado
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
            <h2 className="text-3xl text-center font-bold mb-6 text-gray-900">
              ¿Dónde nos encontrás?
            </h2>

            <div className="flex-1 rounded-xl overflow-hidden border border-gray-200 shadow-sm min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.90382348123!2d-64.3516519!3d-33.1317351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2000000000001%3A0x0!2sLa%20Rioja%20225%2C%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación CMR"
              ></iframe>
            </div>

            <div className="mt-8 text-center bg-cmr-naranja-bg p-6 rounded-xl border border-cmr-naranja/20">
              <p className="text-gray-700 mb-4 font-medium text-lg">
                ¿Prefieres escribirnos directamente para sacar un turno?
              </p>
              <button
                className="bg-[#25D366] text-white rounded-full px-8 py-3 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center w-full md:w-auto mx-auto"
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                }
              >
                <i className="pi pi-whatsapp mr-3 text-2xl"></i>
                <span className="font-bold text-lg">Chatear por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
