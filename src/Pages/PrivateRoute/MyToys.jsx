import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../ContextProvider/AuthProvider'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'


const MyToys = () => {
  const {user} = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/userToy?sellerEmail=${user.email}`;

// console.log(url);
  useEffect(()=>{
    fetch(url)
    .then(res=> res.json())
    .then(data=> setMyToys(data))
  },[])


  const handleDelete =(id) =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteToy/${id}`,{
          method:'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

            const remainingToys = myToys?.filter(item=> item._id !== id);
            setMyToys(remainingToys)
          }
          console.log(data);
        })
        .catch((err)=>console.log(err.message))
      }
    })
  }
  








  return (
    <div className='myToys-container mb-32'>
      <h1 className='text-5xl text-center font-bold text-teal-300 mt-8'>My Added Toys</h1>
      <div className="overflow-x-auto mt-12">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th> 
              <th>Picture</th> 
              <th>Toy Name</th> 
              <th>Seller Info</th>
              <th>Price</th> 
              <th>Sub-category</th> 
              <th>Quantity</th> 
              <th>Update/Delete</th> 
            </tr>
          </thead> 
          <tbody>
              {
                myToys?.map((item, index)=>(
                    <tr className='hover' key={item._id}>
                        <td>{index + 1}</td>
                        <td> <img title={item.description} className='w-[70px]' src={item.picture} alt={item.toyName} /> </td>
                        <td>{item.toyName}</td>
                        <td>
                          <p>Name: {item.sellerName}</p> 
                          <p>Email: {item.sellerEmail}</p> 
                        </td>
                        <td>$ {item.price}</td>
                        <td>{item.subCategory}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <Link to={`/toyDetails/${item._id}`}>
                              <button title='UPDATE' className="btn btn-outline btn-info my-6">Update</button>
                          </Link> <br/>
                          <button onClick={()=> handleDelete(item._id)} title='DELETE' className="btn btn-square btn-outline btn-error">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
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

export default MyToys