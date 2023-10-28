import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; // Agrega esta línea
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box } from '@mui/material';
import { useCart } from 'react-use-cart';

const ProductCard = ({ img, nombre, reviews, precio, newPrice, categoria, Desarrolladora }) => {
  const { addItem } = useCart();

  return (
    <Card sx={{ maxWidth: 250, height: 300 }}>
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={nombre}
        style={{ width: '100%' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {nombre}
        </Typography>
        <div className="card-details">
          <span className="total-reviews">{reviews}</span>
          <h4 className="categoria-product">{categoria}</h4>
          <div className="price">
            <h3>{'$' + precio}</h3>
          </div>
          <div className="bag">
            <Button
              onClick={() => {
                addItem({ id: Math.random(), title: nombre, linkImg: img, price: precio, oferta: '', category: categoria });
              }}
              variant="contained"
              size="small"
              startIcon={<ShoppingBagIcon />}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
