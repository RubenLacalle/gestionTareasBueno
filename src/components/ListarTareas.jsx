import FlechaSiguiente from "../assets/flecha-siguiente.svg";
import FlechaAnterior from "../assets/flecha-anterior.svg";
import { useState } from "react";

const ListarTareas = ({
  onEliminarTarea,
  onEditarTarea,
  onOrdenarPor,
  arrayTareas,
}) => {
  const [paginaActual, setPaginaActual] = useState(1);
  const [tareasPorPagina, setTareasPorPagina] = useState(5);

  const indiceUltimaTarea = paginaActual * tareasPorPagina;
  const indicePrimeraTarea = indiceUltimaTarea - tareasPorPagina;
  const tareasPaginaActual = arrayTareas.slice(
    indicePrimeraTarea,
    indiceUltimaTarea
  );
  const totalPaginas = Math.ceil(arrayTareas.length / tareasPorPagina);

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  return (
    <>
      <h2>Lista de tablas</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => onOrdenarPor("nombre")} className="clickeable">
              Nombre
            </th>
            <th
              onClick={() => onOrdenarPor("descripcion")}
              className="clickeable"
            >
              Descripcion
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tareasPaginaActual.length != 0 ? (
            tareasPaginaActual.map((tarea) => (
              <tr key={tarea.id}>
                <td>{tarea.nombre}</td>
                <td>{tarea.descripcion}</td>
                <td>
                  <button
                    className="btn btn-eliminar"
                    onClick={() => onEliminarTarea(tarea.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-editar"
                    onClick={() => onEditarTarea(tarea)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No hay tareas guardadas</td>
            </tr>
          )}
        </tbody>
      </table>
      {arrayTareas.length > tareasPorPagina && (
        <div className="paginacion">
          <button
            onClick={() => cambiarPagina(paginaActual - 1)}
            disabled={paginaActual === 1}
            className="btn-paginacion"
          >
            &lt; Anterior
          </button>

          <span>
            Página {paginaActual} de {totalPaginas}
          </span>

          <button
            onClick={() => cambiarPagina(paginaActual + 1)}
            disabled={paginaActual === totalPaginas}
            className="btn-paginacion"
          >
            Siguiente &gt;
          </button>
        </div>
      )}
    </>
  );
};

export default ListarTareas;
