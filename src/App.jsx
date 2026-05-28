import './App.css'
import Inicio from './components/Paginas/Inicio/Inicio'
import Layout from './components/Layout/Layout'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <Layout>
      <Inicio />
      <ItemListContainer greeting="Todos nuestros productos" />
    </Layout>
  );
}

export default App;