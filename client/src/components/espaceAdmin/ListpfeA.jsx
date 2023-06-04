import React from 'react'
import CartPfeAdmin from './CartPfeAdmin'

const Listpfe = () => {
  return (
    <>
        <div className='h-[80%]'>
          <h2 className='font-medium text-xl'>Vos offres :</h2>
          <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[30rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
            {/* componenet */}
            
            <CartPfeAdmin/>
            <CartPfeAdmin/>
            <CartPfeAdmin/>
            <CartPfeAdmin/>
            
            
            {/* componenet */}
          </div>
        </div>
    </>
  )
}

export default Listpfe