import React from 'react'
import MainLogo from '../assets/MainLogo.png'
import userOne from '../assets/userOne.png'
import { Link, NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
         <>
  <div className="navbar bg-base-100 bg-slate-500 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#fff" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/allToys'>All Toys</Link>
        </li>
        <li>
            <Link to='/myToys'>My Toys</Link>
        </li>
        <li>
            <Link to='/addToys'>Add A Toy</Link>
        </li>
        <li>
            <Link to='/blogs'>Blogs</Link>
        </li>
     
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
        <img src={MainLogo} className='w-[65px] hidden md:flex' alt="logo" />    
        ToTo
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/allToys'>All Toys</Link>
        </li>
        <li>
            <Link to='/myToys'>My Toys</Link>
        </li>
        <li>
            <Link to='/addToys'>Add A Toy</Link>
        </li>
        <li>
            <Link to='/blogs'>Blogs</Link>
        </li>
        {/* <li>
          <img src='profile.png' className='me-6' alt="userprofile" />
        </li> */}
    </ul>
  </div>
  <div className="navbar-end">
    <img src={userOne} title='user' className='w-[50px] me-6' alt="userprofile" />
    <Link to='/login' className="btn">Login</Link>
  </div>
</div>
  </>
    </div>
  )
}

export default Navber