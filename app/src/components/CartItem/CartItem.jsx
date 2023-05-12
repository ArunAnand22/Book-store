import React from 'react'
import './cartItem.css'

function CartItem() {
  return (
    <div className='cartItem-main'>
        <div className="cartItem-leftSection">
            <img src="https://tse3.mm.bing.net/th?id=OIP.VstFlWVjoGA72T1UYfjYkwHaL9&pid=Api&P=0"
            className='cartItem-img'/>
        </div>
        <div className="cartItem-centerSection">
            <h2 className='cartItem-heading'>The Alchemist</h2>
            <h4 className='cartItem-h4'>Author: <span className='cartItem-author'>Paulo Coelho</span></h4>
            <h3 className='cartItem-price'>$450</h3>
        </div>
        <div className="cartItem-rightSection">
            <button className='cartItem-checkout'><i class="fa-regular fa-credit-card"></i></button>
            <button className='cartItem-delete'><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
  )
}

export default CartItem