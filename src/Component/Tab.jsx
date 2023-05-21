import React, { useState } from 'react';
import SportsCar from './SportsCar';
import Truck from './Truck'
import MilitaryVehicle from './MilitaryVehicle';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      offset:400,
      once: true, // Whether animation should only happen once
      easing: 'ease-in-out', // Animation easing
      // You can add more configuration options here...
    });
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div data-aos="fade-left">
      <div className="shop-category-heading mt-20"  >
        <h1 className='font-bold text-center text-2xl md:text-5xl'>Shop by <span className='text-teal-300'>Category</span></h1>
      </div>
      <div className="tab-buttons flex justify-center w-[50%] mx-auto mt-10">
        <button
          className={activeTab === 0 ? 'active btn-style tab-btn-one' : 'btn-style tab-btn-one'}
          onClick={() => handleTabClick(0)}
        >
          Sports Car
        </button>
        <button
          className={activeTab === 1 ? 'active btn-style' : 'btn-style'}
          onClick={() => handleTabClick(1)}
        >
          Truck
        </button>
        <button
          className={activeTab === 2 ? 'active btn-style tab-btn-three' : 'btn-style tab-btn-three'}
          onClick={() => handleTabClick(2)}
        >
          Military Vehicle
        </button>
      </div>

      <div className="tab-content mt-10">
        {activeTab === 0 && <SportsCar/>}
        {activeTab === 1 && <Truck/>}
        {activeTab === 2 && <MilitaryVehicle/>}
      </div>
    </div>
  );
};

export default Tab;
