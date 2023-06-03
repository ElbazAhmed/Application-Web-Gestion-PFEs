import React from 'react'
import Header from '../Header'
import SideBare from '../SideBare'
import Mypfe from '../Mypfe'

function MonPFE() {

  return (
    <div className='flex'>
        <SideBare/>
    
      <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}
        

        {/* componenet */}
        <Mypfe/>
        {/* componenet */}
    </div>
    </div>
  )
}

export default MonPFE