import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="admin-sidebar">
            <h4>ADMIN PANEL</h4>
            <ul>
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/destinations">Destinations</NavLink></li>
                <li><NavLink to="/packages">Packages</NavLink></li>
                <li><NavLink to="/bookings">Taxi Bookings</NavLink></li>
                <li><NavLink to="/users">Users</NavLink></li>
                <li><NavLink to="/enquiry">Enquiry</NavLink></li>
                <li><NavLink to="/packageBooking">Package Bookings</NavLink></li>
            </ul>
        </div>
    )
}

export default Sidebar