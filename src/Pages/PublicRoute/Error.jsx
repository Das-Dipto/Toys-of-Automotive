import React from 'react'
import error from '../../assets/error.jpg'
import { Link } from 'react-router-dom'
import useTitle from '../../hooks/useTitle'

const Error = () => {
  useTitle('404')
  return (
    <div className='error-container w-[100%] h-[100vh] '>
        <div className="error-content flex flex-col justify-center items-center">
            <img className="error-image" src={error} alt="error-image" />
            <Link to="/">
                <button className='btn btn-success mt-9'>Back to Home</button>
            </Link>
        </div>

    </div>
  )
}

export default Error