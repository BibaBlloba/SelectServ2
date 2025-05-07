import React from 'react'
import Slider from './console/Slider'
import { Outlet } from 'react-router-dom'

const Console = () => {
  return (
    <div className='min-h-screen bg-white flex flex-row'>
      <Slider />
      <Outlet />
    </div>
  )
}

export default Console
