import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../ContextProvider/AuthProvider';

const Login = () => {
  const [fieldErrorMessage, setFieldErrorMessage] = useState('');
  const {googleSignIn , loading, mailSignIn} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/myToys';

  // if(loading){
  //   return <h1>Loading</h1>
  // }

  // function for signing with Google Account
  const googleLogin = () =>{
    googleSignIn()
    .then((result)=>{
       const loggedInUser =result.user;
       console.log(loggedInUser);
       navigate(from, { replace: true })
    })
    .catch((error)=>{
      console.log(error.message);
    })
}

// function for signing with Email and Password
const handleLogin = (event) =>{
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  if(email,password){
     mailSignIn(email, password)
     .then((result)=>{
        const loggeInUser = result.user;
        console.log(loggeInUser);
        setFieldErrorMessage('');
        navigate(from, { replace: true })
     })
     .catch((error)=>{
        setFieldErrorMessage('!!! Wrong email or password. Try again');
        console.log(error.message);
        return
     }) 
 }  
}

  return (
    <div className='login-container common-banner flex justify-center items-center'>
      <div className='w-[28rem] login-box common-box'>
        <form onSubmit={handleLogin} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label className="block special-color text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name="email" type="email" placeholder="Email" required/>
          </div>
          <div className="mb-6">
            <label className="block special-color text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name="password" type="password" placeholder="Password" required/>
          </div>
          <div className="flex items-center justify-between">
            <button type="submit"  className="btn btn-outline btn-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
              Sign In
            </button>
            <Link className="inline-block align-baseline font-bold text-sm text-teal-200 hover:text-teal-300" to="/register">
              New Here? Register
            </Link>
          </div>
          <p className="text-red-500 text-xs italic">{fieldErrorMessage}</p>
        </form>
          <button onClick={googleLogin} className='w-full btn btn-outline btn-info text-center'>
           <FcGoogle style={{fontSize:20}} className='me-2'/> 
            Sign in with Google
          </button>
        </div>
    </div>
  )
}

export default Login