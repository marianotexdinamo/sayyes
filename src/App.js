import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import QuienesSomos from "./Routes/QuienesSomos";
import Productos from "./Routes/Productos";
import Producto from "./Routes/Producto";
import Contacto from "./Routes/Contacto";
import Carrito from "./Routes/Carrito";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Faq from "./Routes/faq";
import CartProvider from "./context/cartContext";
import './App.scss';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/nosotras" element={<QuienesSomos />} />
            <Route exact path="/productos" element={<Productos />} />
            <Route exact path="/producto/:id" element={<Producto />} />
            <Route exact path="/categorias/" element={<Productos />} />
            <Route exact path="/categoria/:categoria" element={<Productos />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/carrito" element={<Carrito />} />
            <Route exact path="/contacto" element={<Contacto />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
