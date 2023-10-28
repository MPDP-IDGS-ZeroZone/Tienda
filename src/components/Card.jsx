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

const ProductCard = ({ item, addToCart, handleItemProducto }) => {
  const { id, title, linkImg, price, oferta, category } = item;
  const [defaultImage, setDefaultImage] = useState({});

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };



  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={linkImg}
        alt={title}
        onError={handleErrorImage}
      />
      <CardContent sx={{ backgroundColor: '#14054B' }}>
      <Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
  {title}
</Typography>
<Typography gutterBottom variant="h6" component="div" sx={{ color: 'white' }}>
  <h3>
    {'$ ' + price} | {oferta !== '' ? <span className="oferta" style={{ color: 'white' }}>{oferta}</span> : null}
  </h3>
  <span className="category" style={{ color: 'white' }}>{category}</span>
</Typography>
      </CardContent>
      <CardActions  sx={{ backgroundColor: '#14054B' }}>
        <Button onClick={() => addToCart(item)}>Agregar al carrito</Button> &nbsp;&nbsp;
        <Button onClick={() => handleItemProducto(item)} component={NavLink} to={`/ProductDetails/${id}`} size="medium">
        Ver más
        </Button>

      </CardActions>
    </Card>
  );
};

export default ProductCard;