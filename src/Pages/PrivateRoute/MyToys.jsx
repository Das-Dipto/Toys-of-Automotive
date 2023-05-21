import React from 'react'
import { useEffect, useContext, useState } from 'react'
import { AuthContext } from '../../ContextProvider/AuthProvider'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle'


const MyToys = () => {
  useTitle('My Toys');

  const {user} = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `https://server-a11.vercel.app/userToy?sellerEmail=${user.email}`;

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
        fetch(`https://server-a11.vercel.app/deleteToy/${id}`,{
          method:'DELETE'
        })
        .then((res)=>res.json())
        .then((data)=>{
          if(data.deletedCount > 0){
            Swal.fire(
              'Deleted!',
              'Your Toy has been deleted.',
              'success'
            )

            const remainingToys = myToys?.filter(item=> item._id !== id);
            setMyToys(remainingToys)
          }
          // console.log(data);
        })
        .catch((err)=>console.log(err.message))
      }
    })
  }

  const notify = (order) => toast.success(`${order} sort`);

  const handleFilter = (event) => {
    event.preventDefault();
    const sortOrder = event.target.priceFilter.value;

    fetch(`https://server-a11.vercel.app/price/${sortOrder}?sellerEmail=${user.email}`)
    .then((res)=>res.json())
    .then((data)=> {
      // console.log(data);
      setMyToys(data)
      notify(sortOrder);
    })
    .catch((err)=> console.log(err.message));
  }
  
  return (
    <div className='myToys-container mb-32'>
      <h1 className='text-5xl text-center font-bold text-teal-300 mt-8'>My Added Toys</h1>

      <form onSubmit={handleFilter} className='my-10 flex justify-center flex-wrap'>
          <select name='priceFilter' className="select select-warning w-full max-w-xs mt-3">
            <option disabled selected>Filter by Price</option>
            <option value='descending '>Highest to Lowest</option>
            <option value='ascending'>Lowest to Highest</option>
          </select>
          <button type='submit' className='btn btn-primary mt-3'>Filter</button>
      </form>

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
                          <Link to={`/update/${item._id}`}>
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
          <ToastContainer/>
    </div>
  )
}

export default MyToys