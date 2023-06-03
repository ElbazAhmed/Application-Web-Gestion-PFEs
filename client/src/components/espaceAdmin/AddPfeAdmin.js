import React from 'react'
import Header from '../Header'
import Addpfe from '../Addpfe'
import SideBareAdmin from './SideBareAdmin'



function AddPFE() {
  return (
    <div className='flex'>
      <SideBareAdmin/>

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