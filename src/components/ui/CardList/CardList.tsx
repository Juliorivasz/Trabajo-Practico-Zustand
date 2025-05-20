import type { FC } from "react";
import type { ITarea } from "../../../types/ITarea";
import styles from "./CardList.module.css";
import { useTareas } from "../../../hooks/useTareas";

type CardList = {
  tarea: ITarea;
  handleOpenModalEdit: (tarea: ITarea) => void;
};

export const CardList: FC<CardList> = ({ tarea, handleOpenModalEdit }) => {
  const { deleteTarea } = useTareas();

  const eliminarTarea = () => {
    deleteTarea(tarea.id!);
  };

  const editarTarea = () => {
    handleOpenModalEdit(tarea);
  };

  return (
    <div className={styles.containerCard}>
      <div>
        <h3>{tarea.titulo}</h3>
        <p>{tarea.descripcion}</p>
        <p>
          <b>{tarea.fechaLimite}</b>
        </p>
      </div>
      <div className={styles.actionCard}>
        <button onClick={eliminarTarea}>Eliminar</button>
        <button onClick={editarTarea}>Editar</button>
      </div>
    </div>
  );
};
