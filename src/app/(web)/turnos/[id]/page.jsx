"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DetalleTurnoPage() {
  const { id } = useParams();
  const router = useRouter();
  //para ver los permisos
  const { token, isStaff } = useAuth();
  
  const [turno, setTurno] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ fecha: "", hora: "", anotaciones: "" });

  useEffect(() => {
    const fetchTurno = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/turnos/${id}/`, {
          headers: { Authorization: `Token ${token}` },
        });
        if (!res.ok) throw new Error("Turno no encontrado");
        const data = await res.json();
        setTurno(data);
        setEditData({ fecha: data.fecha, hora: data.hora, anotaciones: data.anotaciones });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
        fetchTurno();
    } else {
        setLoading(false);
    }
  }, [id, token]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setActionLoading(true);
    try {
      const payload = {
        ...editData,
        hora: editData.hora.length === 5 ? `${editData.hora}:00` : editData.hora,
      }; 

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/turnos/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Token ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
          const errorData = await res.json();
          const msj = typeof errorData === "object" 
            ? Object.entries(errorData).map(([campo, msjs]) => `${campo}: ${msjs.join(", ")}`).join(" | ")
            : "Error al actualizar los datos";
          throw new Error(msj);
      }
      
      const dataUpdated = await res.json();
      setTurno(dataUpdated);
      setIsEditing(false);
    } catch (err) {
      alert(err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const cancelarTurno = async () => {
    if (!window.confirm("¿Estás completamente seguro de que deseas cancelar este turno? Esta acción no se puede deshacer.")) return;
    
    setActionLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/turnos/${id}/borrado_logico/`, {
        method: "DELETE",
        headers: { Authorization: `Token ${token}` },
      });
      if (res.ok) {
        alert("Turno cancelado con éxito.");
        router.push("/turnos");
      } else {
        throw new Error("No se pudo cancelar el turno.");
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setActionLoading(false);
    }
  };

  const puedeModificar = turno?.estado === "pendiente" && isStaff;

  return (
    <ProtectedRoute>
      {loading ? (
        <div className="p-10 text-center text-cmr-azul font-bold mt-10">Cargando detalles del turno...</div>
      ) : error ? (
        <div className="p-10 text-center text-red-500 font-bold mt-10">{error}</div>
      ) : turno ? (
        <div className="min-h-[70vh] bg-gray-50 py-10 px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-2xl border-t-4 border-t-cmr-azul">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-cmr-azul">Detalle del Turno #{turno.id}</h1>
              <span className={`px-4 py-1 rounded-full  text-sm font-bold uppercase ${turno.estado === 'cancelado' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-cmr-azul'} `}>
                {turno.estado}
              </span>
            </div>

            {isEditing && isStaff ? (
              <form onSubmit={handleUpdate} className="bg-blue-50 p-6 rounded-xl mb-6 border border-blue-100">
                <h3 className="font-bold text-cmr-azul mb-4">Reprogramar Turno</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nueva Fecha</label>
                    <InputText type="date" className="w-full p-2" value={editData.fecha} onChange={(e) => setEditData({ ...editData, fecha: e.target.value })} required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Nueva Hora</label>
                    <InputText type="time" className="w-full p-2" value={editData.hora} onChange={(e) => setEditData({ ...editData, hora: e.target.value })} required />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Anotaciones adicionales</label>
                  <InputText className="w-full p-2" value={editData.anotaciones} onChange={(e) => setEditData({ ...editData, anotaciones: e.target.value })} />
                </div>
                <div className="flex gap-2">
                  <Button type="button" label="Cancelar" className="w-1/2 p-2 bg-gray-300 text-gray-800 border-none" onClick={() => setIsEditing(false)} />
                  <Button type="submit" label={actionLoading ? "Guardando..." : "Guardar Cambios"} className="w-1/2 p-2 bg-cmr-azul text-white font-bold border-none" disabled={actionLoading} />
                </div>
              </form>
            ) : (
              <div className="grid grid-cols-2 gap-4 text-gray-700 mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p><strong>Fecha:</strong> {turno.fecha}</p>
                <p><strong>Hora:</strong> {turno.hora}</p>
                <p className="col-span-2"><strong>Anotaciones:</strong> {turno.anotaciones}</p>
              </div>
            )}

            {puedeModificar && !isEditing && (
              <div className="flex gap-3 mb-6 border-b pb-6">
                <Button 
                  label="Editar Turno" 
                  icon="pi pi-pencil" 
                  className="w-1/2 bg-cmr-azul text-white p-3 font-bold border-none rounded-lg" 
                  onClick={() => setIsEditing(true)}
                />
                <Button 
                  label={actionLoading ? "Procesando..." : "Finalizar/Cancelar Turno"} 
                  icon="pi pi-trash" 
                  className="w-1/2 bg-red-500 hover:bg-red-600 text-white p-3 font-bold border-none rounded-lg" 
                  onClick={cancelarTurno}
                  disabled={actionLoading}
                />
              </div>
            )}

            <div className="text-center mt-4">
              <Link href="/turnos" className="text-cmr-naranja hover:underline font-semibold flex items-center justify-center gap-2">
                 <i className="pi pi-arrow-left"></i> Volver a mis turnos
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </ProtectedRoute>
  );
}