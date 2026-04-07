import React from 'react'
import { Carousel } from 'react-bootstrap'
import Image from "../images/Image.png";

const Hero = () => {
    return (
        <div>
            <Carousel >
                <Carousel.Item className='hero1'>
                    <div className='hero-overlay'>
                        <h1>Make You Free To Travel</h1>
                        <h1>With Us</h1>
                        <p>Discover the breathtaking beauty of Kerala.</p>
                        <div>
                        <button className="hero-btn">Explore More</button>
                        <button className="hero-btn ms-2">Contact Us</button>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='hero2'>
                    {/* <img src={Image} alt="" style={{width:"100%", height:"75vh"}} /> */}
                    <div className='hero-overlay'>
                        <h1>Family Trips in Kerala</h1>
                        <h1> Fun for Kids </h1>
                        <p>Discover exciting houseboats, wildlife parks and beach adventures that kids will love..</p>
                        <button className="hero-btn">Find More</button>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='hero3'>
                    <div className='hero-overlay'>
                        <h1>Your Adventure Wonderful</h1>
                        <h1>Travel Calls Fast</h1>
                        <p>Adventure awaits in Kerala’s green hills with unforgettable trekking experiences.</p>
                        <button className="hero-btn">View More</button>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Hero