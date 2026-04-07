import React from 'react'
import "./App.css";
import AdminLayout from './AdminLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destinations from './Destination';
import Users from './Users';
import Dashboard from './Dashboard';
import Bookings from './Bookings';
import Packages from './Packages';
import AddDestination from './AddDestination';
import EditDestination from './EditDestination';
import AddPackage from './AddPackages';
import EditPackage from './EditPckages';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="packages" element={<Packages />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="users" element={<Users />} />
            <Route path="addDestination" element={<AddDestination />} />
            <Route path="editDestination/:id" element={<EditDestination />} />
            <Route path='addPackage' element={<AddPackage />} />
            <Route path='editPackage/:id' element={<EditPackage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App