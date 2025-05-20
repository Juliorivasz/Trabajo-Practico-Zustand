import { useEffect, useState, type ChangeEvent, type FC, type FormEvent } from "react";
import { tareaStore } from "../../../store/tareaStore";
import styles from "./Modal.module.css";
import type { ITarea } from "../../../types/ITarea";
import { useTareas } from "../../../hooks/useTareas";
import { generateUniqueId } from "../../utils/uniqueId";

type Modal = {
  handleCloseModal: () => void;
};

const initialState: ITarea = {
  titulo: "",
  descripcion: "",
  fechaLimite: "",
};

export const Modal: FC<Modal> = ({ handleCloseModal }) => {
  const tareaActiva = tareaStore((state) => state.tareaActiva);
  const setTareaActiva = tareaStore((state) => state.setTareaActiva);
  const { crearTarea, putEditarTarea } = useTareas();
  const [formValues, setFormValues] = useState<ITarea>(initialState);

  useEffect(() => {
    if (tareaActiva) {
      return setFormValues(tareaActiva);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [`${name}`]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (tareaActiva) {
      putEditarTarea(formValues);
    } else {
      crearTarea({ ...formValues, id: generateUniqueId() });
    }

    setTareaActiva(null);
    handleCloseModal();
  };

  return (
    <div className={styles.containerPrincipalModal}>
      <div className={styles.contentPopUp}>
        <div>
          <h3>{tareaActiva ? "Editar tarea" : "Crear Tarea"}</h3>
        </div>
        <form
          className={styles.formContent}
          onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              required
              autoComplete="off"
              name="titulo"
              id="titulo"
              placeholder="Ingrese un titulo"
              value={formValues.titulo}
              onChange={handleChange}
            />
            <textarea
              required
              name="descripcion"
              id="descripcion"
              placeholder="Ingrese una descripcion"
              value={formValues.descripcion}
              onChange={handleChange}
            />
            <input
              type="date"
              required
              name="fechaLimite"
              id="fecha"
              onChange={handleChange}
              value={formValues.fechaLimite}
            />
          </div>
          <div className={styles.buttonCard}>
            <button onClick={handleCloseModal}>Cancelar</button>
            <button type="submit">{tareaActiva ? "editar tarea" : "crear Tarea"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};
