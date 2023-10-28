// Card.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { useCart } from 'react-use-cart';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const ProductCard = ({ item, addToCart }) => {
  const { id, nombre, Img, precio, oferta, categoria, desarolladora } = item;
  const [defaultImage, setDefaultImage] = useState({});



  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };



  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={Img}
        alt={nombre}
        onError={handleErrorImage}
      />
      <CardContent sx={{ backgroundColor: '#14054B' }}>
      <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
  {nombre}
</Typography>
<Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
  <h3>
    {'$ ' + precio} | {oferta !== '' ? <span className="oferta" style={{ color: 'white' }}>{oferta}</span> : null}
  </h3>
  <span className="category" style={{ color: 'white' }}>{categoria}</span>
</Typography>
      </CardContent>
      <CardActions  sx={{ backgroundColor: '#14054B' }}>
        <Button onClick={() => addToCart(item)}>Agregar al carrito</Button> &nbsp;&nbsp;
        <NavLink to={`/detalles-del-producto`}>
          <Button size="medium">Ver más</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default ProductCard;