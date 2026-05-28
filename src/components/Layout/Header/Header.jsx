import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <i className="fas fa-home"></i>
                    <span>Mi App</span>
                </div>
            </nav>
            <div className="header-top">
            <h1>
                <img src="../img/logo.png" alt="Logo" className="logo" />
            </h1>
            <form action="./buscar.html" method="GET" className="buscador">
                <input type="text" name="busqueda" placeholder="Ingrese la búsqueda" />
                <button type="submit">Buscar</button>
            </form>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/productos">Productos</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li><a href="/login" className={styles.loginBtn}>
                        <i className="fas fa-user"></i> Login
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;