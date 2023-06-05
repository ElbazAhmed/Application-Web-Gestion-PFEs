import React, { useState } from 'react'
import Header from '../Header'
import SideBare from '../SideBare'
import { useLocation } from 'react-router-dom';

function Pfe() {

    const [redirict,setRedirict]=useState(false)
    
    const location=useLocation();
    const data=location.state;

  return (
    <div className='flex'>
        <SideBare/>
    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}
        <div className='container mx-auto flex flex-col gap-y-6 pt-11'>
            <div>
                <h2 className='text-2xl font-bold'>Titre :</h2>
                <p className='pl-6'>{data.titre}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Problématique :</h2>
                <p className='pl-6'>{data.problematique}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Entreprise :</h2>
                <p className='pl-6'>{data.entreprise}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Description :</h2>
                <p className='pl-6'>{data.description}</p>
            </div>
            <div className='flex justify-end mr-7 pt-4'>
                <button className='bg-green-500 w-[20%] rounded-lg h-8'>S’inscrire</button>
            </div>
            <div>
                <h2 className='text-xl font-bold'>auteur :</h2>
                <p>
                   <span >Nom </span>: {data.author.nom} {data.author.nom} <br/>
                   <span>Poste </span>: {data.author.role}
                </p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default Pfe