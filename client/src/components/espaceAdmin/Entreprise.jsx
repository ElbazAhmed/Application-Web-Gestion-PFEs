import React, { useState } from 'react'
import SideBareAdmin from './SideBareAdmin'
import Header from '../Header'
import {Link, useLocation } from 'react-router-dom'

const Entreprise = () => {
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
        <div className='container mx-auto flex flex-col gap-y-6 pl-6 pt-11'>
            <div>
                <h2 className='text-2xl font-bold'>Nom d'entrepise :</h2>
                <p className='pl-6'>{data.nom}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Secteur :</h2>
                <p className='pl-6'>{data.secteur}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Representant :</h2>
                <p className='pl-6'>{data.Representant}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Contact Representant:</h2>
                <p className='pl-6'>{data.emailRep}</p>
                <p className='pl-6'>{data.numeroRep}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Localisation :</h2>
                <p className='pl-6'>{data.Localisation}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Contact :</h2>
                <p className='pl-6'>{data.email}</p>
                <p className='pl-6'>{data.numero}</p>
            </div>
            <div className='flex justify-end pr-24'>
                <Link to='/Admin/UpdateEntreprise' className='bg-green-500 rounded-lg px-3 py-1' state={data}>
                    <button className=''>Modifier</button>
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Entreprise