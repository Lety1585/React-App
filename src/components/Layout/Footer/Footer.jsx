import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
            <aside> 
                <p>Al navegar por este sitio aceptás el uso de cookies para agilizar tu experiencia de compra.</p> 
            </aside>
                <p><strong><em>Todos los derechos reservados</em></strong></p> 
            <nav className="iconos">
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </nav>
            </nav>
        </footer>
    );
}

export default Footer;