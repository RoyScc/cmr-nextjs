// src/app/(web)/page.js
"use client";
import { useRouter } from "next/navigation";
import Servicios from "@/lib/servicios";
import Profesionales from "@/lib/profesionales";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import "@/app/globals.css";
import CardProfessional from "@/components/DrCard";
import ClimaAPI from "@/components/ClimaAPI";

export default function Home() {
  const router = useRouter();

  return (
    <>
      {/* --- HERO --- */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-white text-gray-800 items-center min-h-[80vh]">
        <div className="p-12 md:p-16 relative z-22 max-w-4xl flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 leading-tight">
            Donde tu <br />
            bienestar es <br />
            nuestra misión.
          </h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            CMR se centra en mejorar tu calidad de vida a través de atención
            especializada y humana.
          </p>
         
        </div>

        <div className="p-12 md:p-16 flex justify-center relative">
          <div className="absolute top-10 right-10 w-2/2 h-4/5 bg-cmr-celeste-bg rounded-[20px] z-0"></div>
          <img
            src="/inicioPVG.png"
            alt="Hero"
            className="relative z-10 max-w-full h-auto"
          />
        </div>
      </section>

      {/* --- SERVICIOS --- */}
      <section className="bg-white p-6 md:p-12" id="servicios">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Servicios.map((item, index) => (
            <div
              className="p-4 cursor-pointer"
              key={index}
              onClick={() => router.push(item.ruta)}
            >
              <div className="p-6 bg-white shadow-md rounded-lg h-full hover:shadow-lg transition-shadow duration-300">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white"
                  style={{ backgroundColor: item.color }}
                >
                  {typeof item.icon === "string" ? (
                    <i className={`${item.icon} text-2xl`}></i>
                  ) : (
                    <div className="text-2xl">{item.icon}</div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {item.titulo}
                </h3>
                <div className="w-8 h-1 mb-4 bg-gray-200"></div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- REHABILITACION --- */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden p-6 text-white"
        style={{
          backgroundImage:
            "url('/paciente-haciendo-rehabilitacion-fisica-ayudado-por-terapeutas.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      >
        {/* Capa oscura superpuesta */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

        <div id="rehabilitacion" className="relative z-20 max-w-4xl flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl text-gray-200 font-bold mb-2 uppercase">
            Medicina Física y Rehabilitación
          </h2>
          <h3 className="text-2xl md:text-3xl text-gray-200 font-semibold mb-6">
            Física Cardio-Pulmonar
          </h3>
          <Button
            label="Reservar un Turno aqui"
            href="/turnos"
            className="bg-cmr-naranja border-none text-white rounded-2xl px-8 py-3 font-bold hover:shadow-lg transition-transform hover:-translate-y-1"
          />
        </div>
      </section>

      {/* --- SECTOR PROFESIONALES --- */}
      <section className="bg-gray-50 p-6 md:p-12" id="profesionales">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Nuestro Equipo Médico
          </h2>
          <p className="text-xl text-gray-600">
            Conoce a nuestro equipo de profesionales especializados.
          </p>
          <div className="w-16 h-1 rounded-full mx-auto mt-4 bg-cmr-naranja"></div>
        </div>

        <CardProfessional />
      </section>

      
      <ClimaAPI />

      {/* --- OBRAS SOCIALES --- */}
      <section className="bg-white p-6 md:px-12 md:py-16">
        <div className="text-center mb-10">
          <span className="text-sm font-bold tracking-widest uppercase mb-2 block text-cmr-naranja">
            Coberturas Médicas
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Obras Sociales y Prepagas
          </h2>
          <div className="w-16 h-1 rounded-full mx-auto mb-6 bg-cmr-naranja"></div>
          <p className="text-gray-600 text-lg">
            Trabajamos con las principales coberturas del país para tu
            tranquilidad.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {[
            "OSDE",
            "Swiss Medical",
            "Sancor Salud",
            "PAMI",
            "Galeno",
            "Medifé",
            "Omint",
          ].map((obra, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-gray-50 px-6 py-3 rounded-lg shadow-sm border border-gray-100"
            >
              <i className="pi pi-verified text-xl text-cmr-azul"></i>
              <span className="font-semibold text-gray-700">{obra}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- PREGUNTAS FRECUENTES --- */}
      <section className="p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start max-w-7xl mx-auto">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-bold mb-4 text-cmr-azul">
              ¿Tienes dudas?
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Entendemos que la salud respiratoria puede generar muchas
              preguntas. Aquí compilamos las consultas más habituales de
              nuestros pacientes en el CMR.
            </p>

            <button
              className="border-2 border-cmr-naranja text-cmr-naranja rounded-full px-6 py-2 font-bold hover:bg-cmr-naranja hover:text-white transition-colors"
              onClick={() => router.push("/contacto")}
            >
              Hacer otra consulta
            </button>
          </div>

          <div className="md:col-span-7 p-6 rounded-xl border-t-4 border-l-4 border-cmr-naranja shadow-lg">
            <Accordion activeIndex={0} className="space-y-2">
              <AccordionTab
                header={
                  <span className="flex items-center font-semibold text-gray-800">
                    <img
                      src="/estetoscopio.png"
                      alt="icono"
                      className="w-6 h-6 mr-3"
                    />
                    ¿Con cuánto tiempo de anticipación debo pedir turno?
                  </span>
                }
              >
                <p className="m-0 text-gray-700 leading-relaxed">
                  Recomendamos solicitar su turno con al menos una semana de
                  anticipación, especialmente para estudios complejos como la
                  espirometría computarizada.
                </p>
              </AccordionTab>

              <AccordionTab
                header={
                  <span className="flex items-center font-semibold text-gray-800">
                    <img
                      src="/estetoscopio.png"
                      alt="icono"
                      className="w-6 h-6 mr-3"
                    />
                    ¿Qué debo llevar a mi primera consulta?
                  </span>
                }
              >
                <p className="m-0 text-gray-700 leading-relaxed">
                  Por favor, asista con su DNI, carnet de obra social, orden
                  médica (si corresponde) y cualquier estudio respiratorio o
                  placa radiográfica previa que tenga.
                </p>
              </AccordionTab>

              <AccordionTab
                header={
                  <span className="flex items-center font-semibold text-gray-800">
                    <img
                      src="/estetoscopio.png"
                      alt="icono"
                      className="w-6 h-6 mr-3"
                    />
                    ¿Atienden urgencias respiratorias?
                  </span>
                }
              >
                <p className="m-0 text-gray-700 leading-relaxed">
                  El CMR es un centro de atención programada y estudios de
                  diagnóstico. Para urgencias o emergencias (falta de aire
                  severa, crisis asmática aguda), le rogamos dirigirse a la
                  guardia del hospital o sanatorio más cercano.
                </p>
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}