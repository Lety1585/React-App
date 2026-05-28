import Item from '../Item/Item';
import styles from './ItemList.module.css';

export default function ItemList({ productos }) {
  return (
    <div className={styles.itemList}>
      {productos.map(producto => (
        <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          imagen={producto.imagen}
          descripcion={producto.descripcion}
          precio={producto.precio}
        />
      ))}
    </div>
  );
}