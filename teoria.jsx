// Destructuring
const usuario = {
nombre: "Ana",
edad: 28,
profesion: "Diseñadora UX"
};

const { nombre, edad } = usuario;
console.log(nombre);
console.log(edad); 

/* Spread operator  */
const productosExclusivos = ["Remera Estrella", "Anillo Sol"];
const productosRegulares = ["Sticker Sagi", "Remera Leo"];
const todosLosProductos = [...productosExclusivos, ...productosRegulares];
console.log(todosLosProductos);
//Resultado: ["Remera Estrella", "Anillo Sol", "Sticker Sagi", "Remera Leo"]

const datosPersonales = {
nombre: "Carlos",
edad: 35
};
const datosProfesionales = {
...datosPersonales, // Copiamos todo lo de datosPersonales
profesion: "Developer",
edad: 36 // Si una propiedad se repite, la última pisa a la anterior
};
console.log(datosProfesionales);
// Resultado: { nombre: "Carlos", edad: 36, profesion: "Developer" }

/* Métodos de Array: .map() */
const nombres = ['Matias', 'Sabrina', 'Luis'];
/* En React, lo usamos así para crear una lista de elementos: */
<ul>
{nombres.map( (nombre, index) => (
<li key={index}>{nombre}</li>
))}
</ul>

/* children Prop */
