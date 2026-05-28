import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

export default function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular llamada a API
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            nombre: "Sticker Sagi",
            imagen: "/img/sagitario.png",
            descripcion: "Plancha de stickers de Sagitario",
            precio: "1.999",
            stock: 10
          },
          {
            id: 2,
            nombre: "Remera Leo",
            imagen: "/img/leo.png",
            descripcion: "Remera mujer con diseño de Leo",
            precio: "19.999",
            stock: 5
          },
          {
            id: 3,
            nombre: "Tote Capri",
            imagen: "/img/capricornio.png",
            descripcion: "Tote bag de tela de Capricornio",
            precio: "9.999",
            stock: 8
          },
          {
            id: 4,
            nombre: "Taza Aries",
            imagen: "/img/sagitario.png",
            descripcion: "Taza de cerámica personalizada",
            precio: "4.999",
            stock: 15
          },
          {
            id: 5,
            nombre: "Poster Tauro",
            imagen: "/img/leo.png",
            descripcion: "Poster decorativo A3",
            precio: "7.999",
            stock: 12
          },
          {
            id: 6,
            nombre: "Pin Géminis",
            imagen: "/img/capricornio.png",
            descripcion: "Pin metálico esmaltado",
            precio: "2.499",
            stock: 20
          }
        ]);
      }, 2000); // Simula 2 segundos de carga
    });

    getProductos.then(data => {
      setProductos(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className={styles.container}>
      {greeting && <h2 className={styles.greeting}>{greeting}</h2>}
      
      {loading ? (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Cargando productos...</p>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </div>
  );
}