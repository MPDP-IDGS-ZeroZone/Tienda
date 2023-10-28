import React from 'react';
import './Styles/cards.css';

const Cards = ({item, handleClick}) => {
    const {title, descripcion, price, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
        <img src={img} alt="imageShown" />
        </div>
    <div className="details">
        <p>{title}</p>
        <p>{descripcion}</p>
        <p>$  {price}</p>
        <button onClick={() => handleClick(item)}>Añadir al carrito</button>
    </div>
</div>
    
  )
}

export default Cards