import React from 'react'
import Lottie from 'lottie-react'
import Anim from '../../assets/lottieAnim.json'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import useTitle from '../../hooks/useTitle'


const AddToys = () => {
  useTitle('Add Toys');
  
  const handleSubmit = (event) => {
      event.preventDefault();
      const toyName = event.target.toyName.value;
      const sellerName = event.target.sellerName.value;
      const sellerEmail = event.target.email.value;
      const picture = event.target.picture.value;
      const subCategory = event.target.subCategory.value;
      const price = event.target.price.value;
      const rating = event.target.rating.value;
      const quantity = event.target.quantity.value;
      const description = event.target.description.value;

      // console.log(toyName, sellerName, sellerEmail, picture, subCategory, price, rating, quantity, description);
      const newToy = {toyName, sellerName, sellerEmail, picture, subCategory, price, rating, quantity, description}

      fetch('http://localhost:5000/addToys',{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(newToy)
      })
      .then((res)=>res.json())
      .then((data)=>{
        if(data.insertedId) {
          Swal.fire(
            'Well Done!',
            'Toy has been added!',
            'success'
          )
          // event.target.reset();
         
        }
        console.log(data)
      })
      .catch((err)=>console.log(err.message));
   
  }
  return (
    <div className="add-toys-container flex flex-wrap md:justify-around  mb-32">
        <div className="lottie-anim mt-0 md:mt-28 md:me-15">
            <div style={{maxWidth:600}}>
                <Lottie animationData={Anim} />
            </div>
        </div>
        <div className="add-form mt-7">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-wrap mx-0 mb-6">
                <div className="w-full md:w-2/5 me-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-toy-name">
                    Toy Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-toy-name" name="toyName" type="text" placeholder="Toy name" required/>
                  <p className="text-red-500 text-xs italic"></p>
                </div>
                <div className="w-full md:w-2/5 px-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-seller-name">
                    Seller Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-seller-name" name="sellerName" type="text" placeholder="Seller name" required/>
                </div>
              </div>
              <div className="flex flex-wrap mx-0 mb-6">
                <div className="w-full md:w-2/5 md:me-3 px-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-seller-email">
                    Email
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-seller-email" type="email" name='email' placeholder="Seller Email" required/>
                </div>
                <div className="w-full md:w-2/5 me-3 px-0 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-picture">
                    Picture 
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-picture" name="picture" type="text" placeholder="Toy Picture URL" required/>
                </div>
              </div>
              <div className="flex flex-wrap mx-0 mb-2">
               
              <div className="w-full md:w-2/5 md:me-3 px-0 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-subCategory">
                    Sub Category
                  </label>
                  <div className="relative">
                    <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subCategory" name="subCategory" required>
                      <option value="Sports Car">Sports Car</option>
                      <option value="Truck">Truck</option>
                      <option value="Military Vehicle">Military Vehicle</option>
                      <option value="Fire Truck">Fire Truck</option>
                      <option value="Police Car">Police Car</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/5 md:me-3 px-0 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-price">
                    Price
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-price" type="text" name="price" placeholder="Price" required/>
                </div>
                <div className="w-full md:w-2/5 md:me-3  px-0 mb-6 md:mb-0 mt-8">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-rating">
                    Rating
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-rating" type="text" name="rating" placeholder="Rating" required/>
                </div>
                <div className="w-full md:w-2/5 px-0 mb-6 md:mb-0 mt-8">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-quantity">
                    Quantity
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-quantity" type="text" name="quantity" placeholder="Quantity" required/>
                </div>
              </div>
              <div className="w-full px-0 mb-6 md:mb-0 mt-8">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-description">
                    Description
                  </label>
          
                  <textarea id="grid-description" className=' w-full md:w-3/4 textarea textarea-bordered bg-gray-200' name="description" placeholder="Description"  rows='3' required></textarea>
                </div>

                <button type='submit' className="mt-8 w-full md:w-auto text-center btn btn-outline btn-primary">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default AddToys