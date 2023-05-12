import React,{ useState } from 'react'
import './register.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [username,setUsername]=useState('')
  const [useremail,setUseremail]=useState('')
  const [userpassword,setUserpassword]=useState('')
  const navigate=useNavigate();
  const registerFormSubmit=async(e)=>{
    e.preventDefault()
    if(username === "" || useremail === "" || userpassword === ""){
      alert('Invalid details')
    }else{
      try {
        await axios.post("http://localhost:5000/user/register",{
          name:username,
          email:useremail,
          password:userpassword
        })
        navigate('/')
      } catch (error) {
        if(error.response &&
           error.response.status >=400 &&
           error.response.status <=500){
          alert(error.response.data.message);
        }
      }
    }
  }
  return (
    <div className='register-main'>
      <form className="register-form" onSubmit={(e)=>registerFormSubmit(e)}>
        <h1 className='register-heading'>REGISTER</h1>
        <input type="text" placeholder='Enter your name' className='register-input'  onChange={(e)=>setUsername(e.target.value)} required/>
        <input type="email" placeholder='Enter your email' className='register-input' onChange={(e)=>setUseremail(e.target.value)} required/>
        <input type="password" placeholder='Enter your password' className='register-input' onChange={(e)=>setUserpassword(e.target.value)} required/>
        <input type="submit" value='Register' className='register-btn'/>
        <span className='register-span'>Already a user? <Link to="/">Login</Link></span>
      </form>
    </div>
  )
}

export default Register