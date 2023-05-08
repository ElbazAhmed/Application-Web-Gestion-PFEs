import React from 'react'
import {FaUserCircle} from "react-icons/fa"

function Header() {
  return (
    <div className='flex justify-between items-center h-16'>
        <h1 className='text-4xl text-sky-600 '>Projet de Fin d’études</h1>
        <div className='flex items-center pr-2'>
            <FaUserCircle className='text-2xl'/><span className='pl-1 text-2xl'>UserName</span>
        </div>
    </div>
  )
}

export default Header