import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    name: "Arjun & Sana",
    role: "Kozhikode",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Booked the Munnar package for our honeymoon. The arrangements were perfect — hotel, vehicle, everything on time. Rafco really understands what couples need!",
    stars: 5,
  },
  {
    id: 2,
    name: "Raheema Fathima",
    role: "Tirur, Malappuram",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "We did a family trip to Alleppey with 12 people. The houseboat was amazing and the food was delicious. Rafco handled everything — very professional and affordable.",
    stars: 5,
  },
  {
    id: 3,
    name: "Sidhique P",
    role: "Kottakkal",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "I called them on a Tuesday and by Friday we were in Wayanad! Last-minute trip done perfectly. The guide was very knowledgeable. Will book again for Thekkady next.",
    stars: 5,
  },
  {
    id: 4,
    name: "Sara Lee",
    role: "Founder / Trip World",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "From the backwaters to the hill stations, every detail was taken care of. The team at Rafco Travels made our Kerala trip truly unforgettable.",
    stars: 5,
  },
];

const Testimonial = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - itemsPerView ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - itemsPerView : prev - 1
    );
  };

  return (
    <section id="reviews" className="testimonial-section">
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="section-tag">Traveller Reviews</span>
          <h2>What Our Guests Say</h2>
          <div className="section-line"></div>
          <p>
            Real experiences from travellers who explored Kerala with Rafco Travels —
            from backwaters to hilltops.
          </p>
        </div>

        <div className="slider-wrapper">



          {/* DESKTOP VIEW (SLIDER) */}
          {isDesktop ? (
            <>
              <button className="nav-btn prev-btn" onClick={prevSlide}>
                <IoIosArrowBack />
              </button>

              <div className="slider">
                <div
                  className="slider-track"
                  style={{
                    transform: `translateX(-${currentIndex * 50}%)`
                  }}
                >
                  {testimonials.map((item) => (
                    <div className="testimonialcard" key={item.id}>
                      <div className="testi-card-inner">

                        <span className="testi-quote">"</span>

                        <p className="testi-text">{item.text}</p>

                        <div className="testi-stars">
                          {"★".repeat(item.stars)}
                        </div>

                        <div className="testi-author">
                          <img src={item.image} alt={item.name} className="testi-avatar" />
                          <div>
                            <div className="testi-name">{item.name}</div>
                            <div className="testi-role">📍 {item.role}</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="nav-btn next-btn" onClick={nextSlide}>
                <IoIosArrowForward />
              </button>
            </>
          ) : (

            /* MOBILE / TABLET (SCROLL) */
            <div className="slider scroll-mode">
              <div className="slider-track scroll-track">
                {testimonials.map((item) => (
                  <div className="testimonialcard" key={item.id}>
                    <div className="testi-card-inner">

                      <span className="testi-quote">"</span>

                      <p className="testi-text">{item.text}</p>

                      <div className="testi-stars">
                        {"★".repeat(item.stars)}
                      </div>

                      <div className="testi-author">
                        <img src={item.image} alt={item.name} className="testi-avatar" />
                        <div>
                          <div className="testi-name">{item.name}</div>
                          <div className="testi-role">📍 {item.role}</div>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

          )}

        </div>
      </div>
    </section>
  )
}


export default Testimonial;