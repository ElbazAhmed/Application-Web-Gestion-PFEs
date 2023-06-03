import React from 'react'
import { Link } from 'react-router-dom'

function CartPfeEnca() {
  return (
    <Link to={'/ense/PfeEnca'}>   
        <div className='border-2 border-black w-[95%] rounded-md mx-auto px-3 py-3 my-2 flex flex-row items-center justify-between'>
          <div>
            <h2 className='font-bold'>Problématique</h2>
            <p>Entreprise</p>
          </div>
          <div className='flex'>
            <h1 className='text-5xl'>.</h1>
            <h1 className='text-5xl'>.</h1>
            <h1 className='text-5xl'>.</h1>
          </div>
        </div>
    </Link>
  )
}

export default CartPfeEnca