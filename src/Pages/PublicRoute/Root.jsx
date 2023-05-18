import React from 'react'
import Navber from '../../Component/Navber'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
    </div>
  )
}

export default Root