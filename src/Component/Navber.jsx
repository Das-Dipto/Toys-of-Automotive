import React from 'react'
import MainLogo from '../assets/MainLogo.png'
import userOne from '../assets/userOne.png'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../ContextProvider/AuthProvider'

const Navber = () => {
   //Used for active route styling
   const navLinkStyles = ({isActive}) => {
    return{
       color: isActive ? '#ccedee' : '#fff',
       backgroundColor : isActive ? 'black' : 'black',
    }
  }

  const {user, logOut} = useContext(AuthContext);

  const signingOut = () =>{
      logOut()
      .then(()=>{
        console.log("sign out successful")
      })
      .catch((error)=>{
        console.log(error.message);
      })

  }

  return (
  <>
  <div className="navbar  bg-gray-900 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="#fff" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="bg-black menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
        
          <li>
            <NavLink style={navLinkStyles} to='/'>Home</NavLink>
          </li>
     
          <li>
            <NavLink style={navLinkStyles} to='/allToys'>All Toys</NavLink>
          </li>
       
          { user && <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/myToys'>My Toys</NavLink>
          </li>
          }
      
         {user && <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/addToys'>Add A Toy</NavLink>
          </li> }
    
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
       { user && <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/myToys'>My Toys</NavLink>
          </li>
       }
      
      {user && <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/addToys'>Add A Toy</NavLink>
          </li> }
     
      <li>
            <NavLink className='font-bold' style={navLinkStyles} to='/blogs'>Blogs</NavLink>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    {
            user ? <>
              <img className='me-6 user-img' title={user.displayName || user.reloadUserInfo.screenName} src={user.photoURL} alt={user.displayName} /> 
              <Link to='/login' onClick={signingOut} className="btn btn-success">Logout</Link>
              </>
             : 
             <Link to='/login' className="btn btn-success">Login</Link>
     }
  </div>
</div>
</>
  )
}

export default Navber