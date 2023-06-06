import React from 'react'
import {FaUserCircle} from "react-icons/fa"
import Dropdowns from "./Dropdowns"



function Header() {
  return (
    <div className='flex justify-between items-center h-16'>
        <h1 className='text-4xl text-sky-600 font-semibold pl-3'>Projet de Fin d’études</h1>
        <div className='flex items-center pr-2'>
            
            <Dropdowns childrent={<FaUserCircle className='text-2xl'/>}/>
        </div>
    </div>
  )
}

export default Header