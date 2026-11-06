# CMR - Centro Médico Respiratorio

## 📄 Descripción del Proyecto
El **Centro Médico Respiratorio (CMR)** es una aplicación web integral desarrollada exclusivamente para la gestión de pacientes, reserva de turnos y administración de una clínica especializada en salud pulmonar. Esta orientada a personas que no habituan usar aplicaciones

Contiene:
1. **Portal Público para Pacientes:** Permite a los usuarios conocer la institución, explorar el perfil de los profesionales médicos y aprender sobre los distintos servicios que brinda la clínica (como Espirometría, Salud Mental y el Programa de Cesación Tabáquica). Además, incluye un sistema interactivo para solicitar turnos y una sección de contacto.


## 🌦️ API Integrada
El proyecto integra la **OpenWeatherMap API**. Esta API REST externa se consume mediante un *Server Component* en Next.js para mostrar el clima actual (temperatura y condiciones) en tiempo real. 
**Justificación:** La información meteorológica se utiliza en la interfaz para brindar recomendaciones dinámicas de salud respiratoria a los pacientes, que generalmente son ancianos de mayoria de edad (ej. abrigarse si hace frío, tener cuidado con la humedad o aprovechar los días soleados para hacer actividad física al aire libre).

## 🛠️ Tecnologías y Arquitectura
* **Framework:** Next.js (App Router)
* **Librerías de UI:** Tailwind CSS, PrimeReact, PrimeIcons
* **Renderizado:** Implementación mixta de Server Components (consumo de API) y Client Components (interactividad y hooks).
* **Gestión de Estado:** React Context API (`TurnosContext`) y `localStorage` para la persistencia de datos.


### Integrantes:
1. Roy Scheurer


## 🚀 Instrucciones para ejecutar en local

Sigue estos pasos para correr el proyecto en tu entorno de desarrollo (ten en cuenta que necesitaras una api_key para que funcione el widget de clima) :

1. **Clonar el repositorio:**
    ```bash
git clone git@github.com:RoyScc/cmr-nextjs.git
cd cmr-next
npm install
npm run dev
