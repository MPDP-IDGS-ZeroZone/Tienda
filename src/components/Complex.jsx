import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

import Typography from '@mui/material/Typography';

// Componente personalizado para el botón anterior
const CustomPrevArrow = styled('button')({
  position: 'absolute',
  top: '50%',
  left: '15px', // Ajusta la posición izquierda
  transform: 'translateY(-50%)',
  zIndex: 1,
  fontSize: '80px', // Ajusta el tamaño de la flecha
  color: 'white',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
});

// Componente personalizado para el botón siguiente
const CustomNextArrow = styled('button')({
  position: 'absolute',
  top: '50%',
  right: '15px', // Ajusta la posición derecha
  transform: 'translateY(-50%)',
  zIndex: 1,
  fontSize: '80px', // Ajusta el tamaño de la flecha
  color: 'white',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
});

const images = [
  {
    id: '1',
    url: 'https://images.pushsquare.com/ede319822d872/best-ps4-anime-games.900x.jpg',
    title: 'Anime',
    width: '25%',
    link: '/categorias/anime',
  },
  {
    id: '2',
    url: 'https://as01.epimg.net/meristation/imagenes/2018/12/28/reportajes/1545981103_310257_1546429466_noticia_normal.jpg',
    title: 'Aventura',
    width: '25%',
  },
  {
    id: '3',
    url: 'https://sm.ign.com/t/ign_es/screenshot/default/wallpapersden_rasy.1200.jpg',
    title: 'Accion',
    width: '25%',
  },
  {
    id: '4',
    url: 'https://th.bing.com/th/id/OIP.GAoBHxhbH9Tp9_8cE-9-wgAAAA?pid=ImgDet&rs=1',
    title: 'Mundo Abierto',
    width: '25%',
  },
  {
    id: '5',
    url: 'https://th.bing.com/th/id/R.c9c6457789ed984ee086f46d62471f45?rik=MlszcHDZ4HdsGQ&pid=ImgRaw&r=0',
    title: 'Terror',
    width: '25%',
  },
  {
    id: '6',
    url: 'https://gamenews.es/wp-content/uploads/2020/09/scum.jpg',
    title: 'Supervivencia',
    width: '25%',
  },
  {
    id: '7',
    url: 'https://www.fantasymundo.com/wp-content/uploads/2021/02/videojuegos-deporte-696x380.jpg',
    title: 'Deportivos',
    width: '25%',
  },
  {
    id: '8',
    url: 'https://th.bing.com/th/id/OIP.82i3PEHvRpihGRDEMrSyXgHaFj?pid=ImgDet&rs=1',
    title: 'Ciencia Ficcion',
    width: '25%',
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4, // Cantidad de imágenes a mostrar a la vez
  slidesToScroll: 4, // Cantidad de imágenes a desplazarse en cada cambio
  prevArrow: <CustomPrevArrow />, // Componente personalizado para el botón anterior
  nextArrow: <CustomNextArrow />,
};

const ImageSlider = styled(Slider)({
  width: '90%', // Ajusta el ancho del slider según tus necesidades
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  margin: 2,
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '1px solid currentColor',
    },
  },
}));


const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 50%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));


export default function ButtonBaseDemo() {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: 'white' }}>Explora por categorías</h2>
      <ImageSlider {...settings}>
        {images.map((image) => (
          <ImageButton focusRipple key={image.title}>
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                sx={{
                  position: 'relative',
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                }}
              >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
              </Typography>
            </Image>
          </ImageButton>
        ))}
      </ImageSlider>
    </Box>
  );
}
