import React from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true, 
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <div className="banner-container ">
          <div className="banner-content w-[80%] mx-auto mt-8 md:mt-14 " data-aos="fade-up">
              <h1 className='text-3xl md:text-5xl text-white font-semibold'><span className='special-color'>To</span>ys of Au<span className='special-color'>To</span>motive</h1>
              <p className='my-6 w-full md:w-[40%] font-semibold text-white '>
                Popularly known as <span className='text-success font-bold'>ToTo</span>, the ultimate hobby shop for toy cars.
               <span className='special-color'> Assemble with kits designed by industry professionals. </span>  
              </p>
              <Link to='/blogs'>
                <button className="btn btn-success">Learn More</button>
              </Link>
          </div>
      </div>
    </>
  )
}

export default Banner