import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/storedata')
    .then((res)=> res.json())
    .then((data)=> setAllToys(data))
    .catch((err)=>console.log(err.message))
  },[])

  return (
    <div className='allToys-container mb-32'>
      <h1 className='text-4xl font-semibold text-center text-teal-500 mt-10'>All Toys</h1>
      <h3 className='text-2xl font-semibold text-center my-5'>Added by the users</h3>
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
    </div>
  )
}

export default AllToys