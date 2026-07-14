import { useState } from 'react';
import styles from '../Contador/Contador.module.css';

export function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(prev => prev + 1);
  const decrementar = () => setContador(prev => prev - 1);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '10px 0'
      }}
    >
      <h3>Cantidad: {contador}</h3>

      <button className={styles.buttonCont} onClick={incrementar}>
        Sumar +1
      </button>
      <p style={{ margin: '0 10px' }}>{contador}</p>
      <button className={styles.buttonCont} onClick={decrementar}>
        Restar -1
      </button>
    </div>
  );
}

export default Contador;