import React from 'react'
import {FaUserCircle} from "react-icons/fa"

function AddPFE() {
  return (
    <div className='h-full'>
        {/* componenet */}
        <div className='flex justify-between items-center h-16'>
            <h1 className='text-4xl text-sky-600 '>Projet de Fin d’études</h1>
            <div className='flex items-center pr-2'>
                <FaUserCircle className='text-2xl'/><span className='pl-1 text-2xl'>UserName</span>
            </div>
        </div>
        {/* componenet */}

        <div className='h-[90%] flex flex-col justify-around '>
            <h2 className='text-xl font-bold'>Ajouter un sujet de PFE :</h2>
            <form className='flex flex-col justify-center gap-y-4 w-[75%]'>
                <input placeholder='Titre' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <input placeholder='Domaine de recherche' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <input placeholder='Problematique' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <input placeholder='Entreprise' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <textarea id="message" rows="4" className="border-black border-2 rounded-lg pl-2" placeholder="Description"></textarea>
            </form>
        </div>
    </div>
  )
}

export default AddPFE