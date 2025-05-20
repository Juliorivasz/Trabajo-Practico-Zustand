import { useShallow } from "zustand/shallow";
import { tareaStore } from "../store/tareaStore";
import { editarTarea, eliminarTarea, getAllTareas, postNuevaTarea } from "../http/tarea";
import type { ITarea } from "../types/ITarea";
import Swal from "sweetalert2";

export const useTareas = () => {
  const { tareas, setTareas, agregarNuevaTarea, eliminar, editar } = tareaStore(
    useShallow((state) => ({
      tareas: state.tareas,
      setTareas: state.setArrayTareas,
      agregarNuevaTarea: state.agregarNuevaTarea,
      eliminar: state.eliminarTarea,
      editar: state.editarTarea,
    })),
  );

  const getTareas = async () => {
    const data = await getAllTareas();
    if (data) setTareas(data);
  };

  const crearTarea = async (nuevaTarea: ITarea) => {
    agregarNuevaTarea(nuevaTarea);
    try {
      await postNuevaTarea(nuevaTarea);
      Swal.fire("Exito", "Tarea creada correctamente", "success");
    } catch (error) {
      console.log(error);
      // elimina la tarea en el zustand
      eliminar(nuevaTarea.id!);
    }
  };

  const putEditarTarea = async (tareaEditada: ITarea) => {
    const estadoPrevio = tareas.find((tarea) => tarea.id === tareaEditada.id);
    editar(tareaEditada);
    try {
      await editarTarea(tareaEditada);
      Swal.fire("Exito", "Tarea actualizada correctamente", "success");
    } catch (error) {
      if (estadoPrevio) {
        console.log(error);
        return editar(estadoPrevio);
      }
    }
  };

  const deleteTarea = async (idTarea: string) => {
    const estadoPrevio = tareas.find((tarea) => tarea.id === idTarea);
    const confirm = await Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (!confirm.isConfirmed) return;
    eliminar(idTarea);

    try {
      await eliminarTarea(idTarea);
      Swal.fire("Eliminado", "La tarea se elimino correctamente", "success");
    } catch (error) {
      if (estadoPrevio) {
        return postNuevaTarea(estadoPrevio);
      }
      console.log(error);
    }
  };

  return {
    getTareas,
    crearTarea,
    putEditarTarea,
    deleteTarea,
    tareas,
  };
};
