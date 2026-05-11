import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import "./App.css";
import DestinationDetails from './DestinationDetails';
import DistrictDestinations from './DistrictDestinations';
import DestinationCategory from './DestinationCategory';
import Login from './Login';
import Register from './Register';
import PackageDetails from './PackageDetails';
import AllPackages from './AllPackages';
import "./New.css";
import Saved from './Saved';
import Favorites from './Favorites';
import Profile from './Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactUs from './components/ContactUs';
import AdminLayout from '../../admin/src/AdminLayout';
import AdminDashboard from '../../admin/src/Dashboard';
import Destinations from '../../admin/src/Destination';
import Packages from '../../admin/src/Packages';
import AdminTaxiBookings from '../../admin/src/Bookings';
import Users from '../../admin/src/Users';
import AddDestination from '../../admin/src/AddDestination';
import EditDestination from '../../admin/src/EditDestination';
import AddPackage from '../../admin/src/AddPackages';
import EditPackage from '../../admin/src/EditPckages';
import AdminEnquiries from '../../admin/src/Enquiry';
import AdminPackageBookings from '../../admin/src/PackageBookings';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="/district/:name" element={<DistrictDestinations />} />
          <Route path="/category/:category" element={<DestinationCategory />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/package/:id" element={<PackageDetails />} />
          <Route path="/all-packages" element={<AllPackages />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="packages" element={<Packages />} />
            <Route path="bookings" element={<AdminTaxiBookings />} />
            <Route path="users" element={<Users />} />
            <Route path="addDestination" element={<AddDestination />} />
            <Route path="editDestination/:id" element={<EditDestination />} />
            <Route path='addPackage' element={<AddPackage />} />
            <Route path='editPackage/:id' element={<EditPackage />} />
            <Route path='enquiry' element={<AdminEnquiries />} />
            <Route path='packageBooking' element={<AdminPackageBookings />} />
          </Route>
          {/* <Route path='/contactUs' element={<ContactUs />} /> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App