import React,{useState,useEffect} from 'react'
import './dashboard.css'
import AdminHeader from '../Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

function Dashboard() {

const [books,setBooks]=useState([])
const [users,setUsers]=useState([])

const getAllBooks=async()=>{
    const result=await axios.get('http://localhost:5000/user/allbooks')
    setBooks(result.data.data)
}
const getAllUsers=async()=>{
    const result=await axios.get('http://localhost:5000/admin/usercount')
    setUsers(result.data.data)
}

useEffect(()=>{
    getAllBooks()
    getAllUsers()
},[])
  return (
    <>
    <AdminHeader/>
    <div className="dashboard-main">
        {/* users */}
        <div className="dashboard-usersCard">
            <span className='dashboard-userIcon'><i class="fa-solid fa-users"></i></span>
            <h1 className="dashboard-count">{users.length}</h1>
            <h3 className='dashboard-user'>USERS</h3>
        </div>
        {/* books */}
        <div className="dashboard-bookCard">
            <span className='dashboard-bookIcon'><i class="fa-solid fa-book"></i></span>
            <h1 className="dashboard-count">{books.length}</h1>
            <h3 className='dashboard-user'>BOOKS</h3>
        </div>
        {/* sales */}
        <div className="dashboard-salesCard">
            <span className='dashboard-moneyIcon'><i class="fa-solid fa-money-bill-wave"></i></span>
            <h1 className="dashboard-count">$2800</h1>
            <h3 className='dashboard-user'>SALES</h3>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard