// src/app/(admin)/layout.jsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "primeicons/primeicons.css";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname(); 
  const [isAuthorized, setIsAuthorized] = useState(false); //estados para condicional usuario

  // Lógica de ProtectedRoute integrada
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (!usuario) {
      router.push("/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    router.push("/login");
  };

  // Si no está autorizado aún, no renderiza nada (evita parpadeos)
  if (!isAuthorized) return null;

  // Clases auxiliares para los enlaces del menú
  const linkClass = (path) => `flex items-center gap-4 px-6 py-3 text-sm font-medium transition-colors ${
    pathname === path 
      ? "text-cmr-azul bg-cmr-celeste-bg border-r-4 border-cmr-naranja"
      : "text-gray-600 hover:text-cmr-azul hover:bg-gray-50"
  }`;

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      
      {/* SIDEBAR (Aside) */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
        
        {/* Logo Superior */}
        <div className="h-24 flex items-center justify-center border-b border-gray-100">
          <img src="/isotipo-cmr.svg" alt="Logo CMR" className="h-12" />
        </div>

        {/* Menú de Navegación */}
        <nav className="flex-1 overflow-y-auto py-6">
          
          {/* Categoría: AGENDA */}
          <div className="mb-6">
            <span className="px-6 text-xs font-bold text-[#1f2937] tracking-wider mb-2 block">AGENDA</span>
            <Link href="/admin/agenda" className={linkClass("/admin/agenda")}>
              <i className="pi pi-calendar text-lg"></i> Agenda
            </Link>
            <Link href="/admin/turnos" className={linkClass("/admin/turnos")}>
              <i className="pi pi-clock text-lg"></i> Turnos
            </Link>
          </div>

          {/* Categoría: PACIENTES */}
          <div className="mb-6">
            <span className="px-6 text-xs font-bold text-[#1f2937] tracking-wider mb-2 block">PACIENTES</span>
            <Link href="/admin/pacientes" className={linkClass("/admin/pacientes")}>
              <i className="pi pi-users text-lg"></i> Pacientes
            </Link>
            <Link href="/admin/historias-clinicas" className={linkClass("/admin/historias-clinicas")}>
              <i className="pi pi-folder-open text-lg"></i> Historias Clínicas
            </Link>
            <Link href="/admin/recetas" className={linkClass("/admin/recetas")}>
              <i className="pi pi-file-edit text-lg"></i> Recetas
            </Link>
          </div>

          {/* Categoría: ADMINISTRACIÓN */}
          <div className="mb-2">
            <span className="px-6 text-xs font-bold text-[#1f2937] tracking-wider mb-2 block">ADMINISTRACIÓN</span>
            <Link href="/admin/servicios" className={linkClass("/admin/servicios")}>
              <i className="pi pi-list text-lg"></i> Servicios
            </Link>
            <Link href="/admin/profesionales" className={linkClass("/admin/profesionales")}>
              <i className="pi pi-id-card text-lg"></i> Profesionales
            </Link>
            <Link href="/admin/configuracion" className={linkClass("/admin/configuracion")}>
              <i className="pi pi-cog text-lg"></i> Configuración
            </Link>
          </div>
        </nav>

        {/* Bottom: Usuario y Logout */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cmr-celeste-bg flex items-center justify-center font-bold text-cmr-azul">
              U
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800 m-0">Usuario</p>
              <button 
                onClick={handleLogout}
                className="text-xs text-gray-500 hover:text-red-500 transition-colors bg-transparent border-none p-0 cursor-pointer"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* ÁREA PRINCIPAL (Donde se cargan las páginas) */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>

    </div>
  );
}