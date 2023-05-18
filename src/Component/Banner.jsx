import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="banner-container ">
          <div className="banner-content w-[80%] mx-auto mt-8 md:mt-14 ">
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