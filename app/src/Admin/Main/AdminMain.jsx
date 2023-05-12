import React,{ useState,useEffect } from 'react'
import './adminMain.css'
import AdminHeader from '../Header/AdminHeader'
import Footer from '../../components/Footer/Footer'
import axios from 'axios'
import loading from '../../asset/admin-loading.gif'
import {useNavigate} from 'react-router-dom'

function AdminMain() {
    const [books,setBooks]=useState([])
    const navigate=useNavigate()
    const getAllBooks=async()=>{
        const result=await axios.get(`http://localhost:5000/user/allbooks`)
        setBooks(result.data.data)
    }

    const delAdminBook=async(id)=>{
        await axios.delete(`http://localhost:5000/admin/book/delete/${id}`)
        navigate('/admin-side/main-page')
    }

    useEffect(()=>{
        getAllBooks()
    },[])

  return (
    <>
    <AdminHeader/>
    <div className="adminMain-container">
    <div className="adminMain-list">
    {
        books ? books.map(data=>(
            <div className="adminMain-section">
                <div className="adminMain-left">
                    <img src={data.image} className='adminMain-img'/>
                </div>
                <div className="adminMain-center">
                    <h3 className='adminMain-book'>{data.book}</h3>
                    <h5 className='adminMain-author'>by {data.author}</h5>
                    <h4 className='adminMain-price'>${data.price}</h4>
                    <h5>Available:<span className='adminMain-available'>{`${data.available?'Available':'Not Available'}`}</span></h5>
                </div>
                <div className="adminMain-right">
                    <button className="adminMain-edit"><i class="fa-solid fa-pen-to-square"></i></button>
                    <button className="adminMain-delete" onClick={()=>delAdminBook(data._id)}><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        )) : {loading}
        }
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default AdminMain