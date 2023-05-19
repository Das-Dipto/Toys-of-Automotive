import React, { useState } from 'react';
import SportsCar from './SportsCar';
import Truck from './Truck'
import MilitaryVehicle from './MilitaryVehicle';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="shop-category-heading mt-20 ">
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
