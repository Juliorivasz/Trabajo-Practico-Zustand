import { create } from "zustand";
import type { ITarea } from "../types/ITarea";

interface TareaStore {
  tareas: ITarea[];
  tareaActiva: ITarea | null;
  setTareaActiva: (tareaActiva: ITarea | null) => void;
  setArrayTareas: (arrayDeTareas: ITarea[]) => void;
  agregarNuevaTarea: (nuevaTarea: ITarea) => void;
  editarTarea: (tareaEditada: ITarea) => void;
  eliminarTarea: (idTarea: string) => void;
}

export const tareaStore = create<TareaStore>((set) => ({
  tareas: [],
  tareaActiva: null,
  setTareaActiva: (tareaActiva) => set(() => ({ tareaActiva })),
  setArrayTareas: (arrayDeTareas) => set(() => ({ tareas: arrayDeTareas })),
  agregarNuevaTarea: (nuevaTarea) => set((state) => ({ tareas: [...state.tareas, nuevaTarea] })),
  editarTarea: (tareaEditada) =>
    set((state) => {
      const arregloTareas = state.tareas.map((tarea) =>
        tarea.id === tareaEditada.id ? { ...tarea, ...tareaEditada } : tarea,
      );
      return { tareas: arregloTareas };
    }),
  eliminarTarea: (idTarea) =>
    set((state) => {
      const arregloTareas = state.tareas.filter((tarea) => tarea.id !== idTarea);
      return { tareas: arregloTareas };
    }),
}));
