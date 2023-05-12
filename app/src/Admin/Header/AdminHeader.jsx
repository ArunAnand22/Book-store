import React from 'react'
import './adminHeader.css'
import Logo from '../../asset/logo.png'
import { Link } from 'react-router-dom'

function AdminHeader() {
  return (
    <div className='adminHeader-main'>
        <div className="adminHeader-section">
        <div className="adminHeader-leftSection">
            <img src={Logo} className="adminHeader-img" />
        </div>
        <div className="adminHeader-rightSection">
            <ul className='adminHeader-list'>
                <li><Link to="/admin-side/main-page">Home</Link></li>
                <li><Link to="/admin-side/dash">Dashboard</Link></li>
                <li><Link to="/admin-side/users">Users</Link></li>
                <li>Logout</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default AdminHeader