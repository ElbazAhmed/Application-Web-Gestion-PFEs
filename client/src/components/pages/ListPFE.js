import React from 'react'
import Header from '../Header'
import {TbSearch} from 'react-icons/tb'
import SideBare from '../SideBare'
import Listpfe from '../Listpfe'



function ListPFE(props) {
 



  return (
    <div className='flex'>
      <SideBare/>
    
      <div className='h-full w-full'>
            
        {/* componenet */}
        <Header/>
        {/* componenet */}


        {/* compenant */}
        <Listpfe/>
        {/* compenant */}    
      </div>
    </div>
  )
}

export default ListPFE