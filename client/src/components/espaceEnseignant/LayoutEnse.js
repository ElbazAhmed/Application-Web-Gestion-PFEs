import React from 'react'
import SideBare from './SideBare'
import Header from '../Header'
import { Outlet } from 'react-router-dom'

function LayoutEnse() {
  return (
    <div className='flex'>
      <SideBare/>

    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}

        {/* compenant */}
        <Outlet/>
        {/* compenant */}
    </div>
    </div>
  )
}

export default LayoutEnse