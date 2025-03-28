import React, { useEffect } from "react";
import { useState } from "react";

const TareaForm = ({ tareaEditar, onAgregarTarea, onActualizarTarea }) => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (tareaEditar) {
      setNombre(tareaEditar.nombre);
      setDescripcion(tareaEditar.descripcion);
    }
  }, [tareaEditar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tareaEditar) {
      // En caso de que estemos editando
      const tareaEditada = {
        id: tareaEditar.id,
        nombre,
        descripcion,
      };
      onActualizarTarea(tareaEditada);
    } else {
      // Si estamos creando una nueva tarea (le damos un id unico)
      const nuevaTarea = {
        id: Date.now(),
        nombre,
        descripcion,
      };
      onAgregarTarea(nuevaTarea);
    }

    setNombre("");
    setDescripcion("");
  };

  return (
    <div className="tarea-container">
      <h2>Crear Nueva Tarea</h2>

      <form onSubmit={handleSubmit} className="tarea-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="descripcion">Descripcion:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn btn-guardar">
            {tareaEditar ? "Editar Tarea" : "Añadir Tarea"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TareaForm;
