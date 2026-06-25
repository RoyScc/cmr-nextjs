// src/app/layout.js
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";
import { TurnosProvider } from "@/context/TurnosContext";

export const metadata = {
  title: "CMR - Centro Médico Respiratorio",
  description: "Sistema de Gestión y Atención al Paciente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body>
        <TurnosProvider>
          {children}
        </TurnosProvider>
      </body>
    </html>
  );
}
