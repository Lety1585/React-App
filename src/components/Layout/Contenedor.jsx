function Contenedor({ children }) {
    const estilo = {
        border: "1px solid #ccc",
        padding: "16px",
        margin: "32px 0",
        "background-color": "#fcd6ef",
    };
    return <div style={estilo}>{children}</div>;
}
export default Contenedor