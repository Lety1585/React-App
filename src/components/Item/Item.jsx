import styles from './Item.module.css';

export default function Item({ id, nombre, imagen, descripcion, precio }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={nombre} className={styles.image} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.price}>${precio}</p>
      </div>

    </div>
  );
}