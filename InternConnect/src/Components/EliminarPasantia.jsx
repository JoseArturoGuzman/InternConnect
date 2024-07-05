import React from "react";
import "../Styles/StylesComponents/EliminarPasantia.css"
export default function EliminarPasantia({ onConfirm, onCancel }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Desea Eliminar la Pasantía?</h2>
          <div className="modal-buttons">
            <button onClick={onConfirm}>Si</button>
            <button onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
    );
  }