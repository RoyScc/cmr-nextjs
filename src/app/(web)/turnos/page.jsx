"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function TurnosPage() {

  const { token, isStaff, username, logout } = useAuth();

  const [turnos, setTurnos] = useState([]);
  const [opcionesProfesionales, setOpcionesProfesionales] = useState([]);
  const [opcionesServicios, setOpcionesServicios] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [search, setSearch] = useState("");
  const [fechaBusqueda, setFechaBusqueda] = useState("");
  
  const [mostrarForm, setMostrarForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    paciente: "1", 
    consultorio: "1", 
    profesional: null,
    servicio: null,
    fecha: "",
    hora: "09:00:00",
    anotaciones: "",
  });

  useEffect(() => {
    if (!token) return;
    const fetchSelects = async () => {
      try {
        const headers = { Authorization: `Token ${token}` };
        const [resProf, resServ] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profesionales/`, { headers }),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/servicios/`, { headers })
        ]);
        if (resProf.ok) {
          const data = await resProf.json();
          setOpcionesProfesionales((data.results || data).map(p => ({ label: p.nombre_completo, value: p.id })));
        }
        if (resServ.ok) {
          const data = await resServ.json();
          setOpcionesServicios((data.results || data).map(s => ({ label: s.nombre, value: s.id })));
        }
      } catch (err) {
        console.error("Error cargando selects:", err);
      }
    };
    fetchSelects();
  }, [token]);

  // leer (GET)
  const fetchTurnos = async (queryText = "", queryDate = "") => {
    setLoading(true);
    setError(null);
    try {
      
      let url = `${process.env.NEXT_PUBLIC_API_URL}/api/turnos/?`;
      if (queryText) url += `search=${encodeURIComponent(queryText)}&`;
      if (queryDate) url += `fecha=${queryDate}&`;

      const res = await fetch(url, {
        headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("No se pudieron cargar los turnos.");
      const data = await res.json();
      let fetchedTurnos = data.results || data;

      if (!isStaff && username) {
        fetchedTurnos = fetchedTurnos.filter(t => 
          JSON.stringify(t).toLowerCase().includes(username.toLowerCase())
        );
      }

      setTurnos(fetchedTurnos);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchTurnos();
  }, [token]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchTurnos(search, fechaBusqueda);
  };

  // crear (POST)
  const handleCrearTurno = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError("");

    const payload = {
      ...formData,
      hora: formData.hora.length === 5 ? `${formData.hora}:00` : formData.hora,
      estado: "pendiente",
      anotaciones: formData.anotaciones || "Agendado vía web",
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/turnos/`, {
        method: "POST",
        headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error al crear el turno. Verifica los datos.");

      setMostrarForm(false);
      fetchTurnos();
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ProtectedRoute>
      
      <div className="w-full flex justify-end p-4 bg-white shadow-sm">
        <Button 
          onClick={logout}
          className="border rounded-xl mr-3 bg-cmr-azul-claro border-2 p-3 text-cmr-azul font-bold hover:bg-gray-100 transition"
        > 
          Cerrar Sesión
        </Button>
      </div>

      <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div>
              <span className="text-xl font-semibold uppercase tracking-wider text-cmr-naranja block">
                {isStaff ? "Panel Médico" : "Portal de Paciente"}
              </span>
              <h2 className="text-xl ml-2 font-semibold  uppercase tracking-wider text-cmr-naranja-claro block">
              {isStaff ? "Aqui veras los turnos de todos tus pacientes" : "Listado de mis turnos:"}
              </h2>
              
            </div>
            
            {/* Si no es admin/doctor */}
            {!isStaff ? (
              <Button
                label={mostrarForm ? "Ver Mis Turnos" : "Solicitar Nuevo Turno"}
                icon={mostrarForm ? "pi pi-list" : "pi pi-plus"}
                className="bg-cmr-naranja text-white font-bold p-3 border-none rounded-xl"
                onClick={() => setMostrarForm(!mostrarForm)}
              />
            ) : null}
          </div>

          {mostrarForm ? (
            <div className="bg-white p-8 shadow-md rounded-2xl max-w-2xl mx-auto border-t-4 border-t-cmr-azul">
              <h2 className="text-xl font-bold text-cmr-azul mb-6 text-center">Agendar Cita</h2>
              <form onSubmit={handleCrearTurno} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Profesional</label>
                  <Dropdown value={formData.profesional} options={opcionesProfesionales} onChange={(e) => setFormData({ ...formData, profesional: e.value })} placeholder="Seleccione un médico" className="w-full" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Servicio</label>
                  <Dropdown value={formData.servicio} options={opcionesServicios} onChange={(e) => setFormData({ ...formData, servicio: e.value })} placeholder="Seleccione el servicio" className="w-full" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Fecha</label>
                    <InputText type="date" className="w-full p-2" value={formData.fecha} onChange={(e) => setFormData({ ...formData, fecha: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Hora</label>
                    <InputText type="time" className="w-full p-2" value={formData.hora} onChange={(e) => setFormData({ ...formData, hora: e.target.value })} required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Anotaciones</label>
                  <InputText className="w-full p-2" value={formData.anotaciones} onChange={(e) => setFormData({ ...formData, anotaciones: e.target.value })} />
                </div>
                {formError && <small className="text-red-500 font-bold block text-center">{formError}</small>}
                <Button type="submit" label={submitting ? "Guardando..." : "Confirmar Turno"} className="w-full p-3 bg-cmr-azul text-white font-bold" disabled={submitting} />
              </form>
            </div>
          ) : (
            <div>
              <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <InputText 
                  value={search} 
                  onChange={(e) => setSearch(e.target.value)} 
                  placeholder={isStaff ? "Buscar por DNI o Apellido..." : "Buscar turno..."} 
                  className="w-full md:w-1/2 p-3" 
                />
                <InputText 
                  type="date"
                  value={fechaBusqueda} 
                  onChange={(e) => setFechaBusqueda(e.target.value)} 
                  className="w-full md:w-1/3 p-3" 
                  title="Filtrar por fecha específica"
                />
                <Button label="Buscar" icon="pi pi-search" className="bg-cmr-azul text-white p-3 font-bold md:w-auto w-full" type="submit" />
                
                {(search || fechaBusqueda) && (
                   <Button 
                     type="button" 
                     icon="pi pi-times" 
                     className="p-button-text text-gray-500 p-3" 
                     onClick={() => { setSearch(""); setFechaBusqueda(""); fetchTurnos("", ""); }} 
                     tooltip="Limpiar filtros"
                   />
                )}
              </form>

              {loading ? (
                <div className="text-center py-12 text-gray-500 font-medium">Cargando turnos...</div>
              ) : turnos.length === 0 ? (
                <div className="bg-white p-10 text-center rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-700">No hay turnos registrados</h3>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {turnos.map((t) => (
                    <div key={t.id} className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-l-cmr-celeste flex flex-col justify-between">
                      <div>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-cmr-azul uppercase">{t.estado}</span>
                        <h4 className="font-bold text-gray-800 text-base mt-3 mb-1">{t.fecha} - {t.hora} hs</h4>
                        <p className="text-sm text-gray-600 mb-2"><strong>Anotaciones:</strong> {t.anotaciones}</p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end">
                        <Link href={`/turnos/${t.id}`} className="text-sm font-semibold text-cmr-naranja hover:underline">
                          {isStaff ? (
                            <>Ver / Editar <i className="pi pi-pencil text-xs ml-1"></i></>
                          ) : (
                            <>Ver Detalle <i className="pi pi-arrow-right text-xs ml-1"></i></>
                          )}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}