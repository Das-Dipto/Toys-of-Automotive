import React from 'react'
import { Link } from 'react-router-dom'

const VR = () => {
  return (
    <>
    <div className="vr-container flex justify-center">
        <div className="content mt-6 md:mt-24">
            <h1 className='font-semibold text-2xl md:text-7xl text-white text-center'>Join our <span className='special-color'>Virtual Reality Show</span></h1>
            <p className='text-white text-1xl md:text-3xl text-center font-semibold my-7'>Get an ultimate immersive <span className='special-color'>experiece that never before.</span> </p>
            <Link to='/login' className='w-100 flex justify-center  mt-4 md:mt-16'>
                <button className='btn btn-info'>Join now</button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default VR