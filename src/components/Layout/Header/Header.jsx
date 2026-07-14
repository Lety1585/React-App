import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

function Header() {
    const context = useContext(CartContext);

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
                    <img src="/imagen/logo.png" alt="Logo" className="logo" />
                </h1>
                <form action="./buscar.html" method="GET" className="buscador">
                    <input type="text" name="busqueda" placeholder="Ingrese la búsqueda" />
                    <button type="submit">Buscar</button>
                </form>
            </div>
            <nav>
                <ul className={styles.navLinks}>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/registro" className={styles.loginBtn}>
                        <i className="fas fa-user"></i> Registro
                    </Link></li>
                    <li><Link to="/login" className={styles.loginBtn}>
                        <i className="fas fa-user"></i> Login
                    </Link></li>
                    <li><Link to="/carrito">Carrito 🛒</Link></li>
                    <div>
                        {context.getCartQuantity()}
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default Header;