import styles from "./Item.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Contador from "../Contador/Contador";
import { useCart } from "../../../../context/CartContext";

export function Item({ id, nombre, imagen, descripcion, precio, stock }) {
  const [esFavorito, setEsFavorito] = useState(false);
  const [quantity, setCantidad] = useState(0);

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log("Comprar clicked, quantity:", quantity);
    if (quantity <= 0) return;

    const product = { id, nombre, imagen, descripcion, precio, stock };
    console.log("Enviando a addToCart:", product, quantity);
    addToCart(product, quantity);

    alert(`Agregaste ${quantity} de ${nombre} al carrito`);
  };

  const verDetalle = () => {
    alert(`Estas viendo ${nombre}`);
  };

  const marcarComoFavorito = () => {
    setEsFavorito(!esFavorito);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imagen} alt={nombre} className={styles.image} />
      </div>

      <div>
        <span onClick={marcarComoFavorito}>
          {esFavorito ? "⭐" : "☆"}
        </span>

        <Link to={`/producto/${id}`} onClick={verDetalle}>
          <button className={styles.button} type="button">
            Ver Detalle
          </button>
        </Link>
      </div>

      <div className={styles.content}>
        <h3 className={styles.nombre}>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.price}>${precio}</p>
        <p>{stock}</p>

        <Contador cantidad={quantity} setCantidad={setCantidad} />

        <button
          className={styles.button}
          type="button"
          onClick={handleAddToCart}
        >
          Comprar
        </button>
      </div>
    </div>
  );
}

export default Item;