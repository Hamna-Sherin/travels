import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO/Mario Brand",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi aliquid itaque consequatur nulla cupiditate voluptas beatae earum eius provident? Assumenda, sed mollitia iste corrupti iusto tempora aliquam explicabo voluptatum officiis eius aut veniam at. Sapiente, impedit! Temporibus excepturi nesciunt accusantium, vel cum eveniet laudantium obcaecati corporis commodi, ea tempore.",
  },
  {
    id: 2,
    name: "Drank Bastis Doe",
    role: "COO/Nell & wells Co.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi aliquid itaque consequatur nulla cupiditate voluptas beatae earum eius provident? Assumenda, sed mollitia iste corrupti iusto tempora aliquam explicabo voluptatum officiis eius aut veniam at. Sapiente, impedit! Temporibus excepturi nesciunt accusantium, vel cum eveniet laudantium obcaecati corporis commodi, ea tempore.",
  },
  {
    id: 3,
    name: "Alex Smith",
    role: "Manager/Travel Co.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi aliquid itaque consequatur nulla cupiditate voluptas beatae earum eius provident? Assumenda, sed mollitia iste corrupti iusto tempora aliquam explicabo voluptatum officiis eius aut veniam at. Sapiente, impedit! Temporibus excepturi nesciunt accusantium, vel cum eveniet laudantium obcaecati corporis commodi, ea tempore.",
  },
  {
    id: 4,
    name: "Sara Lee",
    role: "Founder/Trip World",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate animi aliquid itaque consequatur nulla cupiditate voluptas beatae earum eius provident? Assumenda, sed mollitia iste corrupti iusto tempora aliquam explicabo voluptatum officiis eius aut veniam at. Sapiente, impedit! Temporibus excepturi nesciunt accusantium, vel cum eveniet laudantium obcaecati corporis commodi, ea tempore.",
  },
];

const Testimonial = () => {
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => {
//     if (index < testimonials.length - 2) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   };

//   const prevSlide = () => {
//     if (index > 0) {
//       setIndex(index - 1);
//     } else {
//       setIndex(testimonials.length - 2);
//     }
//   };

const [currentIndex, setCurrentIndex] = useState(0);

const nextSlide = () => {
  if (currentIndex < testimonials.length - 2) {
    setCurrentIndex(currentIndex + 1);
  }
};

const prevSlide = () => {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
};

  return (
    // <section className="testimonial-section">
    //   <Container>

    //     {/* SECTION HEADER */}
    //     <div className="testimonial-header text-center">
    //       <div className="section-line"></div>
    //       <p>
    //         Lorem Ipsum is simply dummy text the printing and typesetting
    //         industry. Lorem Ipsum has been the industry's standard dummy text.
    //       </p>
    //     </div>

    //     <div className="slider-wrapper">

    //       <div
    //         className="slider-track"
    //         style={{
    //           transform: `translateX(-${index * 50}%)`,
    //         }}
    //       >
    //         {testimonials.map((item) => (
    //           <div className="testimonial-slide" key={item.id}>
    //             <div className="testimonial-card">
    //               <FaQuoteLeft className="quote-icon" />
    //               <p>{item.text}</p>
    //             </div>

    //             <div className="testimonial-user">
    //               <img src={item.image} alt="" />
    //               <div>
    //                 <h5>{item.name}</h5>
    //                 <p>{item.role}</p>
    //                 <div className="stars">
    //                   <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="arrow left-arrow" onClick={prevSlide}>
    //         <IoIosArrowBack />
    //       </div>

    //       <div className="arrow right-arrow" onClick={nextSlide}>
    //         <IoIosArrowForward />
    //       </div>

    //     </div>
    //   </Container>
    // </section>

    <section className="testimonial-section">
  <div className="container">
    <div className="section-header">
        <h2>What Our Clients Say</h2>
      <span className="line"></span>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
    </div>

    <div className="slider-wrapper">
      <button className="nav-btn left" onClick={prevSlide}>
        &#10094;
      </button>

      <div className="slider">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 50}%)`,
          }}
        >
          {testimonials.map((item, index) => (
            <div className="testimonialcard" key={index}>
              {/* <div className="quote">“<p>{item.text}</p></div>
              <p>{item.text}</p> */}
              <div style={{color:"grey"}}>
                {/* <FaQuoteLeft size={150}/> */}
                <p><span><FaQuoteLeft size={30}/></span>{item.text}</p> 
                <div className="user">
                <img src={item.image} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                  <div className="stars">★★★★★</div>
                </div>
              </div>
              </div>

              {/* <div className="user">
                <img src={item.image} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                  <div className="stars">★★★★★</div>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      <button className="nav-btn right" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  </div>
</section>
  );
};

export default Testimonial;