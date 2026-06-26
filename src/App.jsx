import './App.css'
import Inicio from './components/Paginas/Inicio/Inicio'
import Layout from './components/Layout/Layout'
import Contenedor from './components/Layout/Contenedor'

function App() {
  return (
    <Layout>
      <Contenedor>
      <Inicio></Inicio>
    </Contenedor>
    </Layout>
  );
}

export default App;