import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.containerTituloHeader}>
        <h2>Aplicacion de tareas</h2>
      </div>
    </div>
  );
};
