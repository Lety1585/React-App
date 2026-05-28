function Saludar(props) {
    console.log(props);
    return (
        <h1>Hola {props.nombre} {props.apellido} {props.edad} </h1>
    )
}

export default Saludar

//App.jsx
  
//       <Saludar nombre="Leticia" apellido="Lenschen" edad={28} />
//       <Saludar nombre="Aldana" apellido="Lenschen" />
