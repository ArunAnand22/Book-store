import React,{useState,useEffect} from 'react'
import './adminUser.css'
import AdminHeader from '../Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'

function AdminUser() {

    const [users,setUsers]=useState([])

    const getAllUsers=async()=>{
        const result=await axios.get('http://localhost:5000/admin/usercount')
        setUsers(result.data.data)
    }

    const adminUserDelete=async(id)=>{
        await axios.delete(`http://localhost:5000/admin/delete/${id}`)
    }
    useEffect(()=>{
        getAllUsers()
    },[])
  return (
    <>
    <AdminHeader/>
    <div className="adminUser-main">
    {users && users.map(users=>(

        <div className="adminUser-list">
            <div className="adminUser-leftSection">
                <h1>{users.name}</h1>
            </div>
            <div className="adminUser-centerSection">
                <h2>{users.email}</h2>
            </div>
            <div className="adminUser-rightSection">
                <button onClick={()=>adminUserDelete(users._id)}><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    ))
    }
    </div>
    <Footer/>
    </>
  )
}

export default AdminUser