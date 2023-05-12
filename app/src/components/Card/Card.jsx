import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'


function Card({data}) {
  
  return (
    <>
    <Link to={`/item-main/${data._id}`}>
    <div className='card-main'>
        <img src={data.image} className="card-img" />
        <div className="card-body">
            <h3 className='card-h3'>by <span className='card-author'>{data.author}</span></h3>
            <h1 className="card-title">{data.book}</h1>
        </div>
    </div>
    </Link>
    </>
  )
}

export default Card