import React from 'react'
import './favoriteItem.css'

function FavoriteItem() {
  return (
      <div className='favoriteItem-main'>
        <div className="favoriteItem-left">
            <img src=""
            className='favoriteItem-img'/>
        </div>
        <div className="favoriteItem-center">
            <h2 className="favoriteItem-heading">Paulo</h2>
            <h4 className="favoriteItem-h4">Author: <span className="favoriteItem-author">Author</span></h4>
        </div>
        <div className="favoriteItem-right">
            <button className="favoriteItem-shopping"><i class="fa-solid fa-cart-shopping"></i></button>
            <button className="favoriteItem-trash"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
        
  )
}

export default FavoriteItem