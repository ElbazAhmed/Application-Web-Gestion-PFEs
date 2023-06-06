import React from 'react'
import Header from '../Header'
import SideBareAdmin from './SideBareAdmin'
import ListpfeA from './ListpfeA'


function ListPFE(props) {


  return (
    <div className='flex'>
      <SideBareAdmin/>
    
      <div className='h-full w-full'>
            
        {/* componenet */}
        <Header/>
        {/* componenet */}



        {/* compenant */}
        <ListpfeA/>
        {/* compenant */}    
      </div>
    </div>
  )
}

export default ListPFE