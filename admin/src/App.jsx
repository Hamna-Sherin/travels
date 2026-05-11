import React from 'react'
import "./App.css";
import AdminLayout from '../../client/src/admin/AdminLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destinations from '../../client/src/admin/Destination';
import Users from '../../client/src/admin/Users';
import Dashboard from '../../client/src/admin/Dashboard';
import Bookings from '../../client/src/admin/Bookings';
import Packages from '../../client/src/admin/Packages';
import AddDestination from '../../client/src/admin/AddDestination';
import EditDestination from './EditDestination';
import AddPackage from '../../client/src/admin/AddPackages';
import EditPackage from '../../client/src/admin/EditPckages';
import AdminEnquiries from '../../client/src/admin/Enquiry';
import EnquiriesHeader from '../../client/src/admin/Enquiry';
import AdminPackageBookings from '../../client/src/admin/PackageBookings';

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
            <Route path='editPackage/:id' element={<EditPackage />} />
            <Route path='enquiry' element={<AdminEnquiries />} />
            <Route path='packageBooking' element={<AdminPackageBookings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App