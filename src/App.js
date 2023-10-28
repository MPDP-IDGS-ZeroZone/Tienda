import './App.css';
import Navbar from './Navbar/Navbar';
import Complex from './components/Complex';
import Slider from './components/Carousel/Slider';
import HomeProductoss from './components/Destacados/HomeProductoss';
import { Container } from '@mui/material';
import { Routes, Route } from "react-router-dom";
import { useCart } from 'react-use-cart';
import { CartProvider } from 'react-use-cart';
import { BrowserRouter } from 'react-router-dom';
import HomeIntegrado from './components/HomeIntegrado';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
//Rutas
import Cart from './components/Cart/Cart';
import Categorias from './components/CateCompo/Categorias';
import ProductDetails from './components/Destacados/ProductDetails';

import { useState } from 'react';

function App() {
  //const { cart, setCart, handleChange, selectedCard, setSelectedCard } = useCart();
  const [productoSeleccionado, setProductoSeleccionado] = useState([]);
  const [contadorProducto, setContadorProducto] = useState(0);
  const [msgProducto, setMsgProducto] = useState(false);
  const [itemProducto, setItemProducto] =useState();

  const handleClick = (item) => {
    let isPresent = false;
    Cart.forEach((product)=>{
     if (item.id === product.id)
     isPresent = true;
    })
    }
    function setCartCookie(cartData, daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      const cartJSON = JSON.stringify(cartData);

  // Crea la cookie con el nombre "cart" y la cadena JSON del carrito
  document.cookie = "cart=" + cartJSON + "; " + expires;
}
  const handleUpdateCart = (updatedCart) => {
    setProductoSeleccionado(updatedCart);
  };
  const contadorPrd = () => {
    const contador = contadorProducto + 1;
    setContadorProducto(contador);
  };
  const informarToUsuario = () => {
    setMsgProducto(true);
  };
  const handleItemProducto = (item) => {
    setItemProducto(item);
    console.log("app", item)
  };

  const addToCart = (item) => {
    const existingProduct = productoSeleccionado.find((product) => product.id === item.id);

    console.log(item);

    if (existingProduct) {
      // Si el producto ya existe, actualiza la cantidad
      setProductoSeleccionado((prevProductos) =>
        prevProductos.map((product) =>
          product.id === item.id ? { ...product, amount: product.amount + 1 } : product
        )
      );
    }
    else {
      setProductoSeleccionado([...productoSeleccionado, { ...item, amount: 1 }]);
    }
    contadorPrd();
    informarToUsuario();  
  }

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar contador={contadorProducto} />
        <br />
        <Routes>
          <Route path='/Categorias' element={<Categorias />} />
          <Route path='/' element={<HomeProductoss addToCart={addToCart} handleClick={handleClick} ItemProducto={handleItemProducto}  />} />
          <Route path='/Cart' element={<Cart productoSeleccionado={productoSeleccionado} setProductoSeleccionado={handleUpdateCart} />} />
          <Route path='/ProductDetails/:productId' element={<ProductDetails ItemProducto={itemProducto}  />} />

        </Routes>
      </CartProvider>
      <Snackbar
        open={msgProducto} // Controla si el Snackbar se muestra
        autoHideDuration={2000} // Controla cuánto tiempo se muestra el mensaje
        onClose={() => setMsgProducto(false)} // Cierra el Snackbar cuando se hace clic en la 'X'
      >
        <MuiAlert severity="success" onClose={() => setMsgProducto(false)}>
          Producto agregado
        </MuiAlert>
      </Snackbar>
    </BrowserRouter>
  );
}

export default App;