import React from "react";

export default function AlertaModal({ visible, mensaje, onClose }) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm transition-opacity">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full mx-4 border-t-4 border-cmr-naranja">
        <i className="pi pi-exclamation-triangle text-4xl text-cmr-naranja mb-4 block"></i>
        <h3 className="text-xl font-bold text-cmr-azul mb-2">Acceso Denegado</h3>
        <p className="text-gray-600 mb-6">{mensaje}</p>
        <button
          onClick={onClose}
          className="w-full bg-cmr-azul hover:bg-[#1a3a4e] text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}