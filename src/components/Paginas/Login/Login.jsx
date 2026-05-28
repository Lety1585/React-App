import styles from './Login.module.css';

function Login() {
    return (
        <login className={styles.login}>
          <>
          <meta charSet="UTF-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="./assets/hero.png" type="image/x-icon" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          />
          <link rel="stylesheet" href="../css/styles.css" />
          <title>Login</title>

          <main>
            <h6>Ingresa a tu cuenta</h6>
            <form className="reg">
              <div>
                <label htmlFor="">Correo</label>
                <input type="email" name="correo" vlaue="" />
              </div>
              <div>
                <label htmlFor="">Contraseña</label>
                <input type="password" name="password" vlaue="" />
              </div>
              <button type="submit">Ingresar</button>
            </form>
          </main>
          </>
        </login>
    );
}

export default Login;