import React from 'react'
import Header from '../componenet/Header'
import {TbSearch} from 'react-icons/tb'

function ListPFE() {
  return (
    <div className='h-full'>
      {/* componenet */}
      <Header/>
      {/* componenet */}
      <form>
        <div className='relative flex items-center'>
          <input placeholder='Rechercher' type='text' className='pl-5 border-2 border-black rounded-lg'/>
          <TbSearch className='pl-1 absolute justify-end text-sky-400 text-lg'/>
        </div>
      </form>
      <div>
        <h2 className='font-medium text-xl'>Vos offres :</h2>
        <div>
          
        </div>
      </div>
      
    </div>
  )
}

export default ListPFE