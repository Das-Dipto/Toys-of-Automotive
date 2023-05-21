import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../ContextProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const SportsCar = () => {
  const {user} = useContext(AuthContext);
  const [car, setCar] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    fetch(`https://server-a11.vercel.app/storedata`)
    .then((res)=>res.json())
    .then((data)=> setCar(data))
    .catch((err)=>console.log(err.message))
  },[])

  const sportsCar = car.filter((item)=> item.subCategory == 'Sports Car')
  const notify = () => toast.warn("You have to log in first to view details", {theme:"light",  autoClose: 2000});
  const handleClick = (id) =>{
     if(!user){
      notify() 
      setTimeout(()=>{
        navigate('/login')
      },2100)
     }
     else{
      navigate(`/toyDetails/${id}`)
     }
  }

  return (
    <div className='sports-car'>
     {
      sportsCar.slice(0,2)?.map((item)=>(
        <div key={item._id} className='category-container my-8 shadow-xl bg-white w-[80%] md:w-[55%] mx-auto'>
            <div className="category-content mx-7">
            <div className="card card-side   flex flex-col md:flex-row my-7">
                <figure><img className='toy-image' src={item.picture} alt={item.toyName} /></figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">Name: {item.toyName}</h2>
                  <h5 className='font-semibold'>Price: ${item.price}</h5>
                  <h5 className='font-semibold'>Rating: {item.rating}</h5>
                  <div className="card-actions justify-start">
                      <button onClick={()=>handleClick(item._id)} className="btn btn-outline btn-secondary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ))
     }
     <ToastContainer/>
    </div>
  )
}

export default SportsCar