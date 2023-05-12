import React,{ useState } from 'react'
import './login.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate();

  const loginFormSubmit=async(e)=>{
    e.preventDefault()
    if(email==="" || password ===""){
      alert("Input not valid")
    }else{
      try {
        await axios.post("http://localhost:5000/user/login",{
          email,
          password
        })
        localStorage.setItem("currentlogin-user",JSON.stringify({email,password}))
        navigate('/user/home')
      } catch (error) {
        if(error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500){
            alert(error.response.data.message)
          }
        }
      }
    }

  return (
    <div className='login-main'>
        <form className="login-form" onSubmit={(e)=>loginFormSubmit(e)}>
            <h1 className='login-heading'>LOGIN</h1>
            <input type="email" placeholder='email' className='login-input' onChange={(e)=>setEmail(e.target.value)} required/>
            <input type="password" placeholder='password' className='login-input' onChange={(e)=>setPassword(e.target.value)} required/>
            <input type="submit" value='Login' className='login-inputbtn'/>
            <span className='login-span'>New here? <Link to="/user/register">Sign-up</Link></span>
        </form>
    </div>
  )
}

export default Login