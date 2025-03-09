import React from 'react'
import { Navigation } from '../components'
import { Outlet } from 'react-router-dom'

function ShopApplicationWrapper() {
  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default ShopApplicationWrapper
