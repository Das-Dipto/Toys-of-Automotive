import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';

const AllToys = () => {
  useTitle('All Toys')
  const [allToys, setAllToys] = useState([]);

  useEffect(()=>{
    fetch('https://server-a11.vercel.app/requiredToyData')
    .then((res)=> res.json())
    .then((data)=> setAllToys(data))
    .catch((err)=>console.log(err.message))
  },[])

  const notifySuccess = (toy) => toast.success(`${toy} Item found`, {theme:'colored'})
  const notifyError = (toy) => toast.error(`Apology! ${toy} not found`, {theme:'colored'} );

  const handleSearch = (event) => {
    event.preventDefault();
    const toyName = event.target.search.value;
    // console.log(toyName);

    fetch(`https://server-a11.vercel.app/searchToy/${toyName}`)
    .then((res)=> res.json())
    .then((data)=> {
      setAllToys(data)
      notifySuccess(data.length)
    })
    .catch((err)=> {
      console.log(err.message);
      notifyError(toyName);
    } )
  }

  return (
    <div className='allToys-container mb-32'>
      <h1 className='text-4xl font-semibold text-center text-teal-500 mt-10'>All Toys</h1>
      <h3 className='text-2xl font-semibold text-center my-5'>Added by the users</h3>

      <div className="flex space-x-4 my-6 w-[80%] md:w-[50%] mx-auto">
        <form onSubmit={handleSearch} className="flex rounded-md overflow-hidden w-full search-box">
          <input type="text" name='search' placeholder='Search by toy name' className="px-4 w-full rounded-md rounded-r-none" />
          <button type='submit' className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
              <FaSearch style={{fontSize:'25'}}/>
          </button>
        </form>
        {/* <button className="bg-white px-6 text-lg font-semibold py-4 rounded-md">Clear</button> */}
      </div>
    
      <div className="overflow-x-auto mt-10">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th></th>
                <th>Seller</th> 
                <th>Toy Name</th> 
                <th>Sub-category</th> 
                <th>Price</th> 
                <th>Quantity</th> 
                <th>Show Details</th>
              </tr>
            </thead> 
            <tbody>
                {
                  allToys?.map((item, index)=>(
                    <tr className='hover' key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.sellerName}</td>
                      <td>{item.toyName}</td>
                      <td>{item.subCategory}</td>
                      <td>$ {item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                          <Link to={`/toyDetails/${item._id}`}>
                          <button className="btn btn-outline btn-primary">View Details</button>
                          </Link>
                      </td>
                    </tr>
                  ))
                }
            </tbody>
           
          </table>
      </div>
<ToastContainer />
    </div>
  )
}

export default AllToys