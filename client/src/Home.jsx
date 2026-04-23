import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import NavbarComponent from './components/Navbar'
import AboutSearch from './components/About'
import ChooseUs from './components/ChooseUs'
import TourCards from './components/TourCards'
import OfferBanner from './components/OfferBanner'
import Testimonial from './components/Testimonial'
import DistrictGrid from './components/DistrictGrid'
import Destinations from './components/Destinations'
import CategorySection from './components/Categories'
import TaxiBooking from './components/TaxiBooking'
import Services from './components/Services'

const Home = () => {
  return (
    <div>
        <NavbarComponent />
        <Hero />
        <AboutSearch />
        {/* <ChooseUs /> */}
        <Services />
        <CategorySection />
        <DistrictGrid />
        <Destinations />
        <TourCards />
        <TaxiBooking />
        <OfferBanner />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home