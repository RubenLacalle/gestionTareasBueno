const ListarTareas = ({
  onEliminarTarea,
  onEditarTarea,
  onOrdenarPor,
  arrayTareas,
}) => {
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
          {arrayTareas.length != 0 ? (
            arrayTareas.map((tarea) => (
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
    </>
  );
};

export default ListarTareas;
