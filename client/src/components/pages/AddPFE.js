import React from 'react'
import Header from '../Header'
import SideBare from '../SideBare'
import Addpfe from '../Addpfe'



function AddPFE() {
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

export default AddPFE