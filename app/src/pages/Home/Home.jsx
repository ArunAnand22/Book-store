import React,{useState,useEffect} from 'react'
import './home.css'
import { useNavigate } from 'react-router'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Card from '../../components/Card/Card'
import loading from '../../asset/user-loading.gif'
import axios from 'axios'


function Home() {

  const [ homeBooks,setHomeBooks ] = useState([])
  const navigate=useNavigate()

  const allHomeBooks = async() => {
    const result = await axios.get(`http://localhost:5000/user/allbooks`)
    setHomeBooks(result.data.data)
  }

  const userValid=()=>{
    if(JSON.parse(localStorage.getItem("currentlogin-user"))){
      navigate("/user/home")
    }else{
      navigate("/")
    }
  }

  useEffect(()=>{
    allHomeBooks()
  },[])
  
  return (
    <>
    <Header/>
    <div className='home-main'>
        <div className="home-input">
        <input type="text" placeholder='Search here..' className='home-searchbar'/>
        </div>
        <div className="home-cardSection">
        {/* Item cards */}
        { homeBooks ? homeBooks.map(data=>(
          <Card data={data}/>
        )) : {loading}
        }
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home