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

            <section className={styles.seccionProductos}>
                <article className={styles.producto}>
                    <h2>Sticker Sagi</h2>
                    <div id="sagi"></div>
                    <img src="/img/sagitario.png" alt="sagitario" />
                    <p>Plancha de stickers</p>
                    <h3>$1.999</h3>
                    <a href="/productos" className={styles.info}>Más info</a>
                    <a href="/carrito" className={styles.agregar}>Agregar al carrito</a>
                </article>

                <article className={styles.producto}>
                    <h2>Remera Leo</h2>
                    <img src="/img/leo.png" alt="leo" />
                    <p>Remera mujer</p>
                    <h3>$19.999</h3>
                    <a href="/productos" className={styles.info}>Más info</a>
                    <a href="/carrito" className={styles.agregar}>Agregar al carrito</a>
                </article>

                <article className={styles.producto}>
                    <h2>Tote Capri</h2>
                    <img src="/img/capricornio.png" alt="capricornio" />
                    <p>Tote bag de tela</p>
                    <h3>$9.999</h3>
                    <a href="/productos" className={styles.info}>Más info</a>
                    <a href="/carrito" className={styles.agregar}>Agregar al carrito</a>
                </article>
            </section>

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