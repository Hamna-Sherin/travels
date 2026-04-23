import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
           <section id="home">
        <div className="hero-bg" />
        <div className="hero-content ">
          {/* <div className="location-badge">
            <span className="pin-icon">📍</span> Kottakkal, Kerala
          </div> */}
          <h1 className="hero-heading">Affordable <span className="gold">Kerala</span></h1>
          <h1 className="hero-subheading">Tours</h1>
          <h1 className="hero-heading-last">You'll Never Forget</h1>
          <p className="hero-desc">
            From the backwaters of Alleppey to the hills of Munnar — Rafco
            Travels crafts personalised Kerala experiences that fit your budget perfectly.
          </p>
          <div className="hero-ctas">
            <a href="#packages" className="btn-primary">
              ⊙ Explore Packages
            </a>
            <a href="#contact" className="btn-outline">
              💬 Chat With Us
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        💬
      </a>
    </div>
  );
};

export default Hero;