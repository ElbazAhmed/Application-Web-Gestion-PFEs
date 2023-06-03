import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBare from './SideBare'
import Header from '../Header'

function Layout() {
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

export default Layout