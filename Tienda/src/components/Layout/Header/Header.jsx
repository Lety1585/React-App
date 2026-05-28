import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <i className="fas fa-home"></i>
                    <span>Mi App</span>
                </div>
                <ul className={styles.navLinks}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Acerca de</a></li>
                    <li><a href="/contact">Contacto</a></li>
                </ul>
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
            <ul className="nav-list">
                <li>
                <a href="../index.html">Inicio</a>
                </li>
                <li>
                <a href="#">Login</a>
                </li>
                <li>
                <a href="./registro.html">Registro</a>
                </li>
                <li>
                <a href="./productos.html">Productos</a>
                </li>
                <li>
                <a href="./contacto.html">Contacto</a>
                </li>
                <li>
                <a href="./carrito.html">Carrito</a>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;