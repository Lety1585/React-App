import { useState } from 'react';
import { FormularioRegistro } from './FormularioRegistro';

export function FormularioContainer() {
    const [datosForm, setDatosForm] = useState({
        nombre: '',
        apellido: '',
        edad: ''
    });

    const [imagenFile, setImagenFile] = useState(null);

    const manejarCambio = (evento) => {
        const { name, value } = evento.target;
        setDatosForm({
            ...datosForm,
            [name]: value
        });
    };

    const manejarCambioImagen = (evento) => {
        setImagenFile(evento.target.files[0]);
    };

    const manejarEnvio = async (evento) => {
        evento.preventDefault();
        if (!imagenFile) {
            alert("Por favor, selecciona una imagen de usuario.");
            return;
        }
        const apiKey = 'b43d7f06f8f7bedd9d5df7a7a3910075'; 
        const formData = new FormData();
        formData.append('image', imagenFile);
        try {
            console.log("Subiendo imagen a Imgbb...");
            const respuestaImgbb = await
                fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                    method: 'POST',
                    body: formData,
                });
            const datosImgbb = await respuestaImgbb.json();
            if (datosImgbb.success) {
                console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);
                const usuarioCompleto = {
                    ...datosForm,
                    urlImagen: datosImgbb.data.url
                };
                console.log('Enviando los siguientes datos COMPLETOS a la API:',
                    usuarioCompleto);
            } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
            }
        } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
        }
    };
    return (
        <FormularioRegistro
            datosForm={datosForm}
            manejarCambio={manejarCambio}
            manejarEnvio={manejarEnvio}
            manejarCambioImagen={manejarCambioImagen}
        />
    );
}

export default FormularioContainer;