import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle'

const Update = () => {
  useTitle('Update Data')

  const {id} = useParams()
  const [updataToy, setUpdateToy] = useState([]);
  // console.log(id);

  useEffect(()=>{
    fetch(`http://localhost:5000/singleToy/${id}`)
    .then((res)=>res.json())
    .then((data)=> setUpdateToy(data))
    .catch((err)=>console.log(err.message))
  },[])

  const {toyName, price, quantity, description} = updataToy;

  const updateSubmit = (event) => {
    event.preventDefault();
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const description = event.target.description.value;
    console.log(price, quantity, description)

    const updatedToyInfo = {price, quantity, description};

    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/updateToy/${id}`,{
          method:'PUT',
          headers:{
            'content-type' : 'application/json'
          },
          body: JSON.stringify(updatedToyInfo)
        })
        .then((res)=>res.json())
        .then(data =>{
           if(data.modifiedCount > 0) {
            Swal.fire('Information updated successfully!')
           }
           console.log(data);
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }

  return (
    <>
    <h1 className='font-bold text-2xl md:text-5xl text-center mt-12'>Toy Name: <span className='text-teal-300'>{toyName}</span> </h1>
    <div className="update-container my-24 flex flex-col items-center">
      <form onSubmit={updateSubmit} className="w-full max-w-lg ">
            <div className="flex flex-wrap mx-0 mb-6"> 
                <div className="w-full md:w-2/5 md:me-3 px-0 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
                          Price
                      </label>
                      <input defaultValue={price} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="text" name="price" placeholder="Price" required/>
                </div>
                  <div className="w-full md:w-2/5 px-0 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-quantity">
                          Quantity
                        </label>
                        <input defaultValue={quantity} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-quantity" type="text" name="quantity" placeholder="Quantity" required/>
                  </div>
            </div>
                  
              <div className="w-full px-0 mb-6 md:mb-0 mt-8">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                      Description
                    </label>
                    <textarea defaultValue={description} id="grid-description" className=' w-full md:w-3/4 textarea textarea-bordered bg-gray-200' name="description" placeholder="Description"  rows='3' required></textarea>
            </div>

              <button type='submit' className="mt-8 w-full text-center btn btn-outline btn-primary">Update</button>
                  
      </form>

    </div>
    </>
  )
}

export default Update