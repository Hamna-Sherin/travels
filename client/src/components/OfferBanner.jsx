import React from 'react'
import { Button } from 'react-bootstrap'
import offerbanner from '../images/offerbanner.jpg'

const OfferBanner = () => {
    return (
        <div>
            <div className='p-5 vw-100' style={{ backgroundColor: "#d04063", display: "flex", alignItems: "center", }}>
                <h1 className='text-light'>Work with our amazing tour guides</h1>
                <Button className='joinTeamBtn btn-light ms-auto' >JOIN OUR TEAM</Button>
            </div>

            <div className='m-5 border-rounded' style={{ display: "flex", background:"rgba(216, 129, 139, 0.7)"}}>
                <div className='w-50 p-5' style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                    <h1 style={{fontWeight:"bolder"}}>SUMMER SPECIAL</h1> <h1 style={{fontWeight:"bolder"}}>UPTO 25% OFF</h1>
                    <h5 className='m-2'>SPEND THE BEST VACTION WITH US </h5>
                    <Button style={{backgroundColor:"#d04063", border:"none", height:"50px", fontSize:"small"}}>VIEW DETAILS</Button>
                </div>
                <div className='w-50'><img className='w-100' src={offerbanner} alt="" /></div>
            </div>
        </div>
    )
}

export default OfferBanner