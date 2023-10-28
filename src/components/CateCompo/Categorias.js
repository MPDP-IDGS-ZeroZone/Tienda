import { useState } from "react";

import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./data";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/sidebar";
import Card from "./Card";
import "./Categorias.css";

function Categorias() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.nombre.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ categoria, Desarolladora, precio, nombre }) =>
          categoria === selected ||
          Desarolladora === selected ||
          precio === selected ||
          nombre === selected
      );
    }

    return filteredProducts.map(
      ({ img, nombre, precio, newPrice, categoria, Desarolladora }) => (
        <Card
          key={Math.random()}
          img={img}
          nombre={nombre}
          categoria={categoria}
          Desarolladora={Desarolladora}
          precio={precio}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default Categorias;