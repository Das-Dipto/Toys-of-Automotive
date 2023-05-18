import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login-container common-banner flex justify-center items-center'>
      <div className='w-[28rem] login-box common-box'>
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label className="block special-color text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block special-color text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="Password" />
            <p className="text-red-500 text-xs italic"></p>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-outline btn-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <Link className="inline-block align-baseline font-bold text-sm text-teal-200 hover:text-teal-300" to="/register">
              New Here? Register
            </Link>
          </div>
        </form>
          <button className='w-full btn btn-outline btn-info text-center'>
           <FcGoogle style={{fontSize:20}} className='me-2'/> 
            Sign in with Google
          </button>
        </div>
    </div>
  )
}

export default Login