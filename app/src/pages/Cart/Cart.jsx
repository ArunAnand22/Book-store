import React from 'react'
import './cart.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CartItem from '../../components/CartItem/CartItem'

function Cart() {
  return (
    <>
    <Header/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <CartItem/>
    <Footer/>
    </>
  )
}

export default Cart