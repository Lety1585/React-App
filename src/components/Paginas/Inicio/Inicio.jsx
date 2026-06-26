//import TarjetaProducto from '../../TarjetaProducto/TarjetaProducto';
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import styles from './Inicio.module.css';

function Inicio() {
    
    return (
        <main className={styles.main}> 
            <section className={styles.mensaje}>
                <h3>
                    Acá encontrarás productos únicos. 
                    <br />
                    ¡Gracias por ser parte de nuestra comunidad! 🪐
                </h3>
                <p className={styles.pink}>✨ Conecta con tu esencia cada día ✨</p> 
            </section>

            <ItemListContainer greeting="Productos Destacados" />

            <section className={styles.seccionComentarios}>
                <div className={styles.comentario}>
                    <h4>Maria Martinez</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde quae optio sequi!</p>
                    <h5>15/08/2025</h5>
                </div>
                <div className={styles.comentario}>
                    <h4>Juan Pérez</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde quae optio sequi!</p>
                    <h5>02/09/2025</h5>
                </div>
                <div className={styles.comentario}>
                    <h4>Marisa Pérez</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h5>02/05/2025</h5>
                </div>
            </section>
        
        </main>
    );
}

export default Inicio;