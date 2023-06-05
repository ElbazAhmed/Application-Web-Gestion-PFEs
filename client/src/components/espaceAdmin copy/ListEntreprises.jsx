import React from 'react'
import SideBareAdmin from './SideBareAdmin'
import CartEntreprise from './CartEntreprise'
import {TbSearch} from 'react-icons/tb'
import Header from '../Header'

const ListEntreprise = () => {
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
        <div className='h-[80%]'>
          <h2 className='font-medium text-xl'>Vos offres :</h2>
          <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[25rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
            {/* componenet */}
            
            <CartEntreprise/>
            <CartEntreprise/>
            <CartEntreprise/>
            <CartEntreprise/>
            <CartEntreprise/>

            
            
            {/* componenet */}
          </div>
          <div className='flex justify-end mr-7 pt-4'>
                <button className='bg-green-500 w-[20%] rounded-lg h-8'>Ajouter Entreprise</button>
          </div>
        </div>
            
      </div>
    </div>
  )
}

export default ListEntreprise