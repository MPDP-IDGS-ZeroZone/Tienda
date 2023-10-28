import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useCart } from 'react-use-cart';

const Cart = (props) => {
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (props.productoSeleccionado) {
      let totalPrice = 0;
      props.productoSeleccionado.forEach((item) => {
        totalPrice += parseFloat(item.price) * item.amount;
      });
      setPrice(totalPrice);
    }
  }, [props.productoSeleccionado]);

  const handleIncremento = (item) => {
    const itemIndex = props.productoSeleccionado.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...props.productoSeleccionado];
      updatedCart[itemIndex].amount += 1;
      props.setProductoSeleccionado(updatedCart);
    }
  };

  const handleDecremento = (item) => {
    const itemIndex = props.productoSeleccionado.findIndex((product) => product.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...props.productoSeleccionado];
      updatedCart[itemIndex].amount -= 1;
      props.setProductoSeleccionado(updatedCart);
    }
  };

  return (
    <Container className="py-4 mt-5">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell>Descuento</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Eliminar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.productoSeleccionado && props.productoSeleccionado.length > 0 ? (
              props.productoSeleccionado.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img src={item.linkImg} alt={item.title} style={{ width: '50px' }} />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleIncremento(item)}>+</Button>
                    {item.amount}
                    <Button onClick={() => handleDecremento(item)}> - </Button>
                  </TableCell>
                  <TableCell>0</TableCell>
                  <TableCell>{(parseFloat(item.price) * item.amount).toFixed(2)}</TableCell>
                  <TableCell>
                    <Button>Eliminar</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>El carrito está vacío.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ padding: 2, textAlign: 'right' }}>
              <Typography variant="h6" gutterBottom>
                Total a pagar
              </Typography>
              <Typography variant="h4">
                $ {price.toFixed(2)}
              </Typography>
              <Button variant="contained" color="primary">
                Completar compra
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Cart;
