import React from 'react'
import Banner from '../../Component/Banner'
import ShopCategory from '../../Component/ShopCategory'
import Supplier from '../../Component/Supplier'
import VR from '../../Component/VR'
import useTitle from '../../hooks/useTitle'

const Home = () => {
  useTitle('Home')
  return (
    <>
     <Banner></Banner>
     <ShopCategory></ShopCategory>
     <Supplier></Supplier>
     <VR></VR>
    </>
  )
}

export default Home