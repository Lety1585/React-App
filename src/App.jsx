import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Productos from './components/Paginas/Productos/ItemListContainer/ItemListContainer';
import Registro from './components/Paginas/Registro/FormularioContainer';
import Login from './components/Paginas/Login/Login';
import ProductoDetalle from './components/Paginas/Productos/ItemDetalle/ItemDetalle';
import Carrito from './components/Paginas/Carrito/Carrito';

function App() {
  return (
    <Routes>{ }
      <Route element={<Layout />}>
        <Route path="/" element={<> <h1>Productos destacados</h1> <Productos Disponibles={true} /> </>} />
        <Route path='/productos' element={<> <h1>Todos los Productos</h1> <Productos Disponibles={false} /> </>} />
        <Route path="/producto/:id" element={<ProductoDetalle />} />
        <Route path='/contacto' />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/carrito' element={<Carrito />} />
      </Route>
    </Routes>);
}

export default App;