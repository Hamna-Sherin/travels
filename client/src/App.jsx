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
import ContactUs from './ContactUs';


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
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  )
}

export default App