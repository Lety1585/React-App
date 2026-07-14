import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

function ItemListContainer({ greeting, Disponibles }) {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const productosDisponibles = Disponibles ? productos.filter(
    (p) => p.disponible === true) : productos

  useEffect(() => {
    fetch('/data/productos.json')
      .then(async (respuesta) => {
        if (!respuesta.ok) {
          const text = await respuesta.text();
          throw new Error(`HTTP ${respuesta.status}: ${text}`);
        }
        return respuesta.json();
      })
      .then((datos) => {
        console.log("Datos cargados:", datos);
        setProductos(datos);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <p>Cargando productos ...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.container}>
      {greeting && <h2 className={styles.greeting}>{greeting}</h2>}

    {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <div className={styles.productos}>
          {productosDisponibles.length === 0 ? (
            <p>No hay productos</p>
          ) : (
            <ItemList productos={productosDisponibles} />
          )}
        </div> 
      )}

    </div>
  );
}

export default ItemListContainer;