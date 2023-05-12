import React from 'react'
import Header from '../Header'
import Addpfe from '../Addpfe'
import SideBare from './SideBare'


function AddPfe() {
  return (
    <div className='flex'>
      <SideBare/>

    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}

        {/* compenant */}
        <Addpfe/>
        {/* compenant */}
    </div>
    </div>
  )
}

export default AddPfe