import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Apps.css';
import { dataDigitalBestSeller } from './Data';
import { Box, Divider } from '@mui/material';
import { useCart } from 'react-use-cart';
import Cart from '../Cart/Cart';
import { NavLink } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ProductCard from '../Card';
import { Container } from '@mui/material';
import HomeIntegrado from '../HomeIntegrado';
import ButtonBaseDemo from '../Complex';

function HomeProductoss(props) {
  const [defaultImage, setDefaultImage] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const { addItem } = useCart();

 


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
    }));
  };

  return (
    <Box>

    <Box>
      <HomeIntegrado/>
    </Box>

    <Container>
      <Box className="B">
        <h2>Destacados y recomendados</h2>
        <br />
        <Divider color="white" />
        <br />
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <ProductCard key={item.id + 'prd'} item={item} addToCart={props.addToCart} ItemProducto={props.ItemProducto}  />
          ))}
        </Slider>
      </Box>
      </Container>
      <br></br>
      <br></br>
      <Box>
      <ButtonBaseDemo/>
      </Box>
      </Box>
    );
  
}

export default HomeProductoss;