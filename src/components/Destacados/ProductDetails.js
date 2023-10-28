// ProductDetails.jsx
import React, { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { useCart } from 'react-use-cart';
import { AddShoppingCart as AddShoppingCartIcon } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, Card, CardMedia, CardContent } from '@mui/material';


const ProductDetails = ({itemProducto}) => {
  const [productData, setProductData] = useState({});
  const { addItem } = useCart();
  const { productId } = useParams();
  

 /* useEffect(() => {
    getResponse();
  }, [productId]);

  const getResponse = async () => {
    try {
      const res = await fetch(`${productId}`);
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };*/
  

  return (
    <Container className="py-4 mt-5">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Imagen</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>descripcion</TableCell>
              <TableCell>Categoria</TableCell>
              <TableCell>Desarolladora</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            
                <TableRow >
                  <TableCell>
                    
                  </TableCell>
                  <TableCell>{itemProducto.title}</TableCell>
                  <TableCell>{itemProducto.price}</TableCell>
                  <TableCell>{itemProducto.description}</TableCell>
                  <TableCell>{itemProducto.category}</TableCell>
                  <TableCell>{itemProducto.desarolladora}</TableCell>
                  <TableCell>
                    <Button >
                      Agregar a carrito
                    </Button>
                  </TableCell>
                </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

  )
            }
export default ProductDetails;
