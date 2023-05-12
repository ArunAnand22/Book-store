import React from 'react'
import './header.css'
import logo from '../../asset/logo.png'
import { Link,useNavigate } from 'react-router-dom'

function Header() {
  const navigate=useNavigate()

  const userLogout=()=>{
    localStorage.removeItem("currentlogin-user")
    navigate("/")
  }

  return (
    <div className='header-main'>
        <div className="header-left">
            <img src={logo} alt="STORE" />
        </div>
        <div className="header-right">
            <ul className="header-list">
                <li><Link to="/user/home">Home</Link></li>
                <li><Link to="/user/favorite"> Favorite</Link></li>
                <li><Link to="/user/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
                <li onClick={()=>userLogout()}><Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header