import React from 'react'
import MainLogo from '../assets/MainLogo.png'
import userOne from '../assets/userOne.png'
import { Link, NavLink } from 'react-router-dom'

const Navber = () => {
   //Used for active route styling
   const navLinkStyles = ({isActive}) => {
    return{
       color: isActive ? '#ccedee' : '#fff',
       backgroundColor : isActive ? 'black' : 'black',
    }
  }

  return (
  <>
  <div className="navbar bg-base-100 bg-black ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#fff" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
          <li>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
          </li>
     
          <li>
            <NavLink style={navLinkStyles} to='/allToys'>All Toys</NavLink>
          </li>
       
          <li>
            <NavLink style={navLinkStyles} to='/myToys'>My Toys</NavLink>
          </li>
     
          <li>
            <NavLink style={navLinkStyles} to='/addToys'>Add A Toy</NavLink>
          </li>
    
          <li>
            <NavLink style={navLinkStyles} to='/blogs'>Blogs</NavLink>
          </li>
     
     
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-3xl special-color" title='Toys of Automotive'>
        <img src={MainLogo} className='w-[65px] hidden md:flex' alt="logo" />    
        ToTo
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/'>Home</NavLink>
          </li>
     
          <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/allToys'>All Toys</NavLink>
          </li>
       
          <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/myToys'>My Toys</NavLink>
          </li>
     
          <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/addToys'>Add A Toy</NavLink>
          </li>
    
          <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/blogs'>Blogs</NavLink>
          </li>
    </ul>
  </div>
  <div className="navbar-end">
    <img src={userOne} title='user' className='w-[50px] me-6' alt="userprofile" />
    <Link to='/login' className="btn btn-success">Login</Link>
  </div>
</div>
</>
  )
}

export default Navber