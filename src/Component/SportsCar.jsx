import React, { useEffect, useState } from 'react'

const SportsCar = () => {
  const [car, setCar] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/storedata`)
    .then((res)=>res.json())
    .then((data)=> setCar(data))
    .catch((err)=>console.log(err.message))
  },[])

  const sportsCar = car.filter((item)=> item.subCategory == 'Sports Car')
  return (
    <>
    <h1>SportsCar</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores eveniet voluptatum quod vel qui quam totam perferendis! Blanditiis dolores obcaecati voluptatem, quo reprehenderit aut voluptas sapiente? Consectetur cum deleniti consequuntur cupiditate molestiae modi numquam inventore veniam beatae, facere, dolores aspernatur.</p>
    <h3>{car.length}</h3>
    <h3>{sportsCar[1].toyName}</h3>
    </>
  )
}

export default SportsCar