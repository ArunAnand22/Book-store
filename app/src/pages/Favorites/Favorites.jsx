import React,{useState,useEffect} from 'react'
import './favorites.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FavoriteItem from '../../components/FavoriteItem/FavoriteItem'
import axios from 'axios'

function Favorites() {

  const [currentuserEmail,setcurrentuserEmail]=useState('')
  const [favorites,setFavorites]=useState([])

  const getFavorite=async()=>{
      const result=await axios.post("http://localhost:5000/user/favorites-books",{
        email:currentuserEmail
      })
      setFavorites(result.data)
  }
  useEffect(()=>{
    setcurrentuserEmail(JSON.parse(localStorage.getItem("currentlogin-user")).email)
    getFavorite()
  },[])
  console.log(favorites);

  return (
    <>
    <Header/>
    <div className="favorite-main">
      {/* {
       favorites && favorites.map(items=>(<FavoriteItem favorites={favorites}/> ))
      } */}
    </div>
    <Footer/>
    </>
  )
}

export default Favorites