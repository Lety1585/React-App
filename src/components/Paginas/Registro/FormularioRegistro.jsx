import styles from './Formulario.module.css';

export function FormularioRegistro({ datosForm, manejarCambio, manejarEnvio, manejarCambioImagen }) {
    console.log(datosForm);

    return (
        
        <form className={styles.formStyle} onSubmit={manejarEnvio}>
            <h3>Registro de usuario</h3>
            <div>
                <label>Nombre </label>
                <input type="text"
                    placeholder="Ej: Nombre"
                    name="nombre" 
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Apellido </label>
                <input type="text"
                    placeholder="Ej: Apellido" 
                    name="apellido" 
                    value={datosForm.apellido}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Edad </label>
                <input type="number" 
                    placeholder="Ej: Edad" 
                    name="edad" 
                    value={datosForm.edad}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Foto de perfil </label>
                <input type="file" 
                    placeholder="https://..." 
                    name="imagen" 
                    onChange={manejarCambioImagen}
                />
            </div>
            <button type="submit">Guardar usuario</button>
        </form>
    );
}

export default FormularioRegistro;