import React, { useState } from 'react'
import SideBareAdmin from './SideBareAdmin'
import Header from '../Header'
import { useLocation } from 'react-router-dom'

const User = () => {
    const [redirict,setRedirict]=useState(false)
    
    const location=useLocation();
    const data=location.state; 
  return (
    <div className='flex'>
        <SideBareAdmin/>
    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}
        <div className='container mx-auto flex flex-col gap-y-6 pt-11'>
            <div>
                <h2 className='text-2xl font-bold'>Nom complet :</h2>
                <p className='pl-6'>{data.nom} {data.prenom}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Filliere :</h2>
                <p className='pl-6'>{data.filier}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Specialite :</h2>
                <p className='pl-6'>{data.specialite}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Email:</h2>
                <p className='pl-6'>{data.email}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Poste :</h2>
                <p className='pl-6'>{data.role}</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default User