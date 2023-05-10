import React from 'react'
import Header from '../Header'
import {TbSearch} from 'react-icons/tb'
import CartPfe from '../CartPfe'



function ListPFE() {
  return (
    <div className='h-full'>
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
        <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[30rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
          {/* componenet */}
          
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          <CartPfe/>
          
          
          {/* componenet */}
        </div>
      </div>
      
    </div>
  )
}

export default ListPFE