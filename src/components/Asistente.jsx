function Asistente({nombres, tarea, emoji}) {
    return (
        <div className="Asist">
            <h3> {nombres} </h3> 
            <p>{tarea} {emoji} </p>
        </div>
    );
}

export default Asistente;

//App.jsx
//const asistentes = [
//     { nombres: "Juan Perez", tarea: 'Frontend Developer', emoji: '' },
//     { nombres: "Ana Gomez", tarea: 'Frontend Developer', emoji: '' },
//     { nombres: "Carlos Ruiz", tarea: 'Backend Developer', emoji: '' }
//   ]
  
//       <h1>Equipo de Trabajo</h1>
//       <ul>
//         {asistentes.map((asistente, index) => (
//           <li key={index}><Asistente {...asistente} /></li>
//         ))}
//       </ul>
