import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Gallery = () => {
    useEffect(() => {
        AOS.init({
          duration: 1200, 
          once: true, 
          offset:400,
          easing: 'ease-in-out', 
        });
      }, []);

    const galleryImages = [
        `https://i.ibb.co/DLj9TYs/porche-toy-car-removebg-preview.png`,
        `https://i.ibb.co/K5qThH4/hummer-rc-car-removebg-preview.png`,
        `https://i.ibb.co/G9Lr1TG/vokodo-rc-truck-removebg-preview.png`,
        `https://i.ibb.co/LdR8dZX/formula-racing-removebg-preview.png`,
        `https://i.ibb.co/MNsFg3Y/cruisecar-removebg-preview.png`,
        `https://i.ibb.co/n0n9S3s/mercedes-truck-removebg-preview.png`,
        `https://i.ibb.co/tMSd4Cd/monster-Truck.webp`,
        `https://i.ibb.co/gzZtfYk/transformer.jpg`,
        `https://i.ibb.co/LNQFPnB/plymount.webp`
    ]


  return (
    <div className='gallery-container mt-20' data-aos="fade-zoom-in">
    <h1 className='text-5xl font-bold text-center'>Toy <span className='text-teal-300'>Gallery</span></h1>
    <div className="container w-full md:w-[78%] mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="mx-12 my-0 md:my-6">
            <img src={image} alt={`Toy Car ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Gallery