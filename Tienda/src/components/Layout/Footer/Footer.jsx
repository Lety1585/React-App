import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
            <aside> 
                <p>Al navegar por este sitio aceptás el uso de cookies para agilizar tu experiencia de compra.</p> 
            </aside>
                <p><strong><em>Todos los derechos reservados</em></strong></p> 
            <nav class="iconos">
                <i class="fab fa-instagram"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
            </nav>
            </nav>
        </footer>
    );
}

export default Footer;