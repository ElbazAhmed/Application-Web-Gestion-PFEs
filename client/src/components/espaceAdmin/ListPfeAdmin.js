import React from 'react'
import Header from '../Header'
import {TbSearch} from 'react-icons/tb'
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
        <form className='flex justify-end mr-7 '>
          <div className='relative flex items-center'>
            <input placeholder='Rechercher' type='text' className='pl-6 border-2 border-black rounded-lg h-8'/>
            <TbSearch className='pl-1 absolute justify-end text-sky-400 text-xl'/>
          </div>
        </form>


        {/* compenant */}
        <ListpfeA/>
        {/* compenant */}    
      </div>
    </div>
  )
}

export default ListPFE