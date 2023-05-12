import React from 'react'
import CartPfe from './CartPfe'

const Listpfe = () => {
  return (
    <>
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
    </>
  )
}

export default Listpfe