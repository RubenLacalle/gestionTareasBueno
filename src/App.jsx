import { useEffect, useState } from "react";
import "./App.css";
import TareaForm from "./components/TareaForm.jsx";
import ListarTareas from "./components/ListarTareas.jsx";

function App() {
  const [tareas, setTareas] = useState(
    localStorage.getItem("tareas")
      ? JSON.parse(localStorage.getItem("tareas"))
      : []
  );

  const [tareaAEditar, setTareaAEditar] = useState(null);

  const [criterioOdenar, setCriterioOrdenar] = useState("id");

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  useEffect(() => {
    const tareasOrdenadas = [...tareas].sort((a, b) => {
      switch (criterioOdenar) {
        case "nombre":
          return a.nombre.localeCompare(b.nombre);
        case "descripcion":
          return a.descripcion.localeCompare(b.descripcion);
        default:
          return a.id - b.id;
      }
    });
    setTareas(tareasOrdenadas);
  }, [criterioOdenar]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]); // Esto viene a ser los mismo que un push.
  };

  const eliminarTarea = (idTarea) => {
    setTareas(tareas.filter((tarea) => tarea.id !== idTarea));
  };

  const editarTarea = (tareaEditar) => {
    setTareaAEditar(tareaEditar);
  };

  const actualizarTarea = (tareaActualizada) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === tareaActualizada.id ? tareaActualizada : tarea
      )
    );
    setTareaAEditar(null);
  };

  const onOrdenarPor = (criterio) => {
    setCriterioOrdenar(criterio);
  };

  return (
    <>
      <TareaForm
        tareaEditar={tareaAEditar}
        onAgregarTarea={agregarTarea}
        onActualizarTarea={actualizarTarea}
      />
      <ListarTareas
        onEliminarTarea={eliminarTarea}
        onEditarTarea={editarTarea}
        onOrdenarPor={onOrdenarPor}
        arrayTareas={tareas}
      />
    </>
  );
}

export default App;
