import React, { useState } from 'react';
import styled from 'styled-components';
import BurguerButton from './BurguerButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Usuario from '../components/Usuario';

const Navbar = ({size, setShow}) => {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <Box>
      <Box display="flex">
          <h2>Bienvenido a <span className="my_shop" onClick={() => setShow(true)}>
            Protiple
          </span></h2>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Usuario />&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <ShoppingCartIcon />
            </span>
            <span>{size}</span>
          </div>
        </Box>
        

        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </Box>
    </>
  )
}

export default Navbar

const Box = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .my_shop {
    font-size: 1.5rem;
    font-weight: arial;
    color: white;
    font-family: Arial, Helvetica, sans-serif; 
    cursor: pointer;
    position: static;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
  .cart span:nth-child(1) {
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
  
  .cart span:nth-child(2) {
    padding: 0 2px;
    background-color: red;
    color: white;
    font-weight: bold;
    border-radius: 7px;
    position: relative;
    top: -10px;
  }
  
  .nav_box .cart {
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
`