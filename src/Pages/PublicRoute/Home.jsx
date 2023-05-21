import React from 'react'
import Banner from '../../Component/Banner'
import ShopCategory from '../../Component/ShopCategory'
import Supplier from '../../Component/Supplier'
import VR from '../../Component/VR'
import useTitle from '../../hooks/useTitle'
import Gallery from '../../Component/Gallery'

const Home = () => {
  useTitle('Home')
  return (
    <>
     <Banner></Banner>
     <Gallery></Gallery>
     <ShopCategory></ShopCategory>
     <Supplier></Supplier>
     <VR></VR>
    </>
  )
}

export default Home