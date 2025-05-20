import { useEffect, useState } from "react";
import { tareaStore } from "../../../store/tareaStore";
import styles from "./ListTareas.module.css";
import { CardList } from "../CardList/CardList";
import { Modal } from "../Modal/Modal";
import type { ITarea } from "../../../types/ITarea";
import { useTareas } from "../../../hooks/useTareas";

export const ListTareas = () => {
  const setTareaActiva = tareaStore((state) => state.setTareaActiva);
  const { getTareas, tareas } = useTareas();

  useEffect(() => {
    getTareas();
  }, []);

  const [openModalTarea, setOpenModalTarea] = useState(false);

  const handleOpenModalEdit = (tarea: ITarea) => {
    setTareaActiva(tarea);
    setOpenModalTarea(true);
  };

  const handleCloseModal = () => {
    setOpenModalTarea(false);
    setTareaActiva(null);
  };

  return (
    <>
      <div className={styles.containerPrincipalListTareas}>
        <div className={styles.containerTitleButton}>
          <h2>Lista de Tareas</h2>
          <button onClick={() => setOpenModalTarea(true)}>Añadir Tarea</button>
        </div>
        <div className={styles.containerList}>
          {tareas.length > 0 ? (
            tareas.map((tarea) => (
              <CardList
                key={tarea.id}
                tarea={tarea}
                handleOpenModalEdit={handleOpenModalEdit}
              />
            ))
          ) : (
            <div className={styles.containerSinTareas}>
              <h2>No hay tareas</h2>
              <p>Agrega una tarea para comenzar</p>
            </div>
          )}
        </div>
      </div>
      {openModalTarea && <Modal handleCloseModal={handleCloseModal} />}
    </>
  );
};
