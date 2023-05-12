import React,{ useState,useEffect } from 'react'
import './itemMain.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function ItemMain() {

  const [book,setBook] = useState('')
  const [currentEmail,setcurrentEmail] = useState('')
  const {id}=useParams()

  const getIndBook= async() => {
    const result =await axios.get(`http://localhost:5000/user-book/${id}`)
    setBook(result.data.result)
  }

  const addFavorite=async(book)=>{
    try {
      await axios.post("http://localhost:5000/user/favorite-book",{
        email:currentEmail,
        book:book.book,
        category:book.category,
        available:book.available,
        price:book.price,
        image:book.image,
        author:book.author
      })
      alert("Favorite added successfully") 
    } catch (error) {
      if(error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500){
          alert(error.response.data.message)
        }
    }
  }

  useEffect(()=>{
    getIndBook()
    setcurrentEmail(JSON.parse(localStorage.getItem("currentlogin-user")).email)
  },[])
  return (
    <>
    <Header/>
    <div className="itemMain-main">
        <div className="itemMain-leftSection">
            <img src={book.image}
             className='itemMain-img'/>
            <h3 className='itemMain-available'>{book.available?'On Stock':'Out of Stock'}</h3>
        </div>
        <div className="itemMain-rightSection">
            <h2 className='itemMain-heading'>{book.book}</h2>
            <h4 className='itemMain-cat'>Category: <span className='itemMain-categ'>{book.category}</span></h4>
            <h4 className='itemMain-cat'>Year: <span className='itemMain-categ'>{book.year}</span></h4>
            <h4 className='itemMain-h4'>Author: <span className='itemMain-author'>{book.author}</span></h4>
            <h3 className='itemMain-price'>${book.price}</h3>
            <div className="itemMain-btnSection">
                <button className='itemMain-favorite' onClick={()=>addFavorite(book)}>Add to Favorite</button>
                {book.available?<button className='itemMain-cart'>Add to Cart</button>:''}
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ItemMain