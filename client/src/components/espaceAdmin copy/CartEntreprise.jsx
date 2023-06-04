import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<<< HEAD:client/src/components/CartPfe.js
function CartPfe() {
  return (
    <Link to={'/gest/pfe'}>   
        <div className='border-2 border-black w-[95%] rounded-md mx-auto px-3 py-3 my-2 flex flex-row items-center justify-between'>
          <div>
            <h2 className='font-bold'>Problématique</h2>
            <p>Entreprise</p>
========

const CartEntreprise = () => {
  return (
    <Link to={'/Admin/Entreprise'}>   
        <div className='border-2 border-black w-[95%] rounded-md mx-auto px-3 py-3 my-2 flex flex-row items-center justify-between'>
          <div>
            <h2 className='font-bold'>Entreprise</h2>
            <p>Secteur</p>
>>>>>>>> ilyas:client/src/components/espaceAdmin copy/CartEntreprise.jsx
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

<<<<<<<< HEAD:client/src/components/CartPfe.js
export default CartPfe
========
export default CartEntreprise
>>>>>>>> ilyas:client/src/components/espaceAdmin copy/CartEntreprise.jsx
