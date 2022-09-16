import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Routes/Home';
import QuienesSomos from "./Routes/QuienesSomos";
import Productos from './Routes/Productos';
import Producto from './Routes/Producto';
import Contacto from './Routes/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/quienes-somos" element={<QuienesSomos/>}/>
          <Route exact path="/productos" element={<Productos/>}/>
          <Route exact path="/producto/:id" element={<Producto/>}/>
          <Route exact path="/categorias/" element={<Productos/>}/>
          <Route exact path="/categoria/:categoria" element={<Productos/>}/>
          <Route exact path="/contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;