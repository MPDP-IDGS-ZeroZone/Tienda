import '../App.css';
import Complex from './Complex';
import Slider from './Carousel/Slider';
import HomeProductoss from './Destacados/HomeProductoss';
import { Container } from '@mui/material';
import { useCart } from 'react-use-cart';
import { CartProvider } from 'react-use-cart';

function HomeIntegrado({ setProductoSeleccionado }) {

  return (
    <>
    <Container>
      <Slider />
    </Container>
   
    </>
  );
}

export default HomeIntegrado;
