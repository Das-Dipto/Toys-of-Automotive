import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register-container common-banner flex justify-center items-center'>
    <div className='w-[28rem] register-box common-box'>
      <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Email" />
        </div>
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="Password" />
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" for="password">
            Photo Url
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="photo" name='photo' type="text" placeholder="Photo URL" />
          <p className="text-red-500 text-xs italic"></p>
        </div>
        <div className="flex items-center justify-between">
          <button className="btn btn-outline btn-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Register
          </button>
          <Link className="inline-block align-baseline font-bold text-sm text-teal-200 hover:text-teal-300" to="/login">
            Already have an account? Login
          </Link>
        </div>
      </form>
      </div>
  </div>
  )
}

export default Register