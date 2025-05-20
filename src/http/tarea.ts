import axios from "axios";
import type { ITarea } from "../types/ITarea";

const API_URL = "http://localhost:3000/tareas";

export const getAllTareas = async () => {
  try {
    const response = await axios.get<ITarea[]>(API_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postNuevaTarea = async (nuevaTarea: ITarea) => {
  try {
    const response = await axios.post<ITarea>(API_URL, nuevaTarea);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editarTarea = async (tareasActualizada: ITarea) => {
  try {
    const response = await axios.put<ITarea>(`${API_URL}/${tareasActualizada.id}`, tareasActualizada);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const eliminarTarea = async (idTarea: string) => {
  try {
    const response = await axios.delete<ITarea>(`${API_URL}/${idTarea}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
