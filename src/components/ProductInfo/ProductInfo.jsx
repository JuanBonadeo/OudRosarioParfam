import React from 'react'
import { useEffect, useState, useContext } from 'react'
import './productInfo.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Carousel from 'react-bootstrap/esm/Carousel'
import { motion } from 'framer-motion';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { CartContext } from '../../context/CartContext';
import { AddToCartIcon } from '../AddtoCartIcon/AddToCartIcon';
import {Button} from '../../ui/';




export const ProductInfo = ({ id, nombre, precio, img1, img2, img3, descripcion, descuento = 0, categoria }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const useCart = () => {
    return useContext(CartContext)
  }

  const { addItem, quantity, formatearMoneda, calcularDescuento } = useCart();
  const handleOnAdd = (quantity) => {
    const productToAdd = {
      id, nombre, precio, quantity, img1, descuento,
    }
    addItem(productToAdd)
  }
  const nuevoPrecio = calcularDescuento(precio, descuento)
  return (
    <>
      <div className='productInfoContainer'>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: .7, ease: "easeInOut", type: "spring", delay: .6 }}
          className="information">
          <h2>{nombre}</h2>
          {descuento !== 0 && (
            <div className="priceAddto">
              <h5>
                <span className="discountedPrice">{nuevoPrecio}</span>
                &nbsp;
                <span className="price">{formatearMoneda(precio)}</span>

              </h5>
            </div>
          )}
          {descuento === 0 && (
            <div className="priceAddto">
              <h5>Precio: {formatearMoneda(precio)}</h5>

            </div>
          )}
          <p>{descripcion}</p>


          <AddToCartIcon onAdd={handleOnAdd} />
          <h5>Categoria: {categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h5>
          {/* <div className="infoPayment">
            <h5>Metodos de Pago:</h5>
            <div className="paymentMethods">
              
              <div className="paymentItem"><AccountBalanceIcon /><span>Transf. Bancaria</span></div>
              <div className="paymentItem"><LocalAtmIcon /><span>Efectivo</span></div>
            </div>
          </div> */}
          <div className="envios"><h5>Envios por Rosario y Funes </h5><LocalShippingIcon /></div>
          




        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6, type: "tween" }}>
          <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer' variant='dark'>
            {img1 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img1} alt="Product" />
              </Carousel.Item>
            )}
            {img2 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img2} alt="Product" />
              </Carousel.Item>
            )}
            {img3 && (
              <Carousel.Item interval={10000}>
                <img className="infoImg" src={img3} alt="Product" />
              </Carousel.Item>
            )}
          </Carousel>
        </motion.div>

      </div>

    </>

  )
}
