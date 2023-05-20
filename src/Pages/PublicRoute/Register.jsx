import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../ContextProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
  useTitle('Register')
  const { loading, createUser, updateUserData} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/myToys'
  const [passwordError, setPasswordError] = useState('');
  const [inputFieldError, setInputFieldError] = useState('');

  // if(loading){
  //     return <h1>loading</h1>
  // }
  
  const handleRegisterSubmit = (event) =>{
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const photoURL = event.target.photo.value;
  
      if(password.length < 6){
          setPasswordError("Password cannot be less than 6 character")
          return;
      }

      else{
          setPasswordError('');
      }

      if(email, password){
          createUser(email, password)
          .then((result)=>{
              const registeredUser = result.user;
              console.log(registeredUser);
              navigate(from, { replace: true })

              updateUserData(result.user, name, photoURL)
              .then(()=>{
                  console.log('user name updated');
              })
              .catch((error)=>{
                  console.log(error.message);
              })
          })
          .catch((error)=>{
              console.log(error.message);
          })
          setInputFieldError('');
      }

      else{
          setInputFieldError("Email & Passport field should not be empty. ")
      }
  }

  return (
    <div className='register-container common-banner flex justify-center items-center'>
    <div className='w-[28rem] register-box common-box'>
      <form onSubmit={handleRegisterSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" name='name' type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Email" required/>
        </div>
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="Password" required/>
          <p className="text-red-500 text-xs italic">{passwordError}</p>
        </div>
        <div className="mb-6">
          <label className="block special-color text-sm font-bold mb-2" htmlFor="password">
            Photo Url
          </label>
          <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="photo" name='photo' type="text" placeholder="Photo URL" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="btn btn-outline btn-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
            Register
          </button>
          <Link className="inline-block align-baseline font-bold text-sm text-teal-200 hover:text-teal-300" to="/login">
            Already have an account? Login
          </Link>
        </div>
        <p className="text-red-500 text-xs italic">{inputFieldError}</p>
      </form>
      </div>
  </div>
  )
}

export default Register