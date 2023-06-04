import React from 'react'
import Header from '../Header'
import SideBareAdmin from './SideBareAdmin'

function Pfe() {


  return (
    <div className='flex'>
        <SideBareAdmin/>
    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}
        <div className='container mx-auto flex flex-col gap-y-6 pt-11'>
            <div>
                <h2 className='text-2xl font-bold'>Titre :</h2>
                <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Problématique :</h2>
                <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Entreprise :</h2>
                <p className='pl-6'>Lorem ipsum dolor </p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Description :</h2>
                <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
                    . Ut enim ad minim veniam, quis nostrum exercitationem ullam  esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className='flex justify-end mr-7 pt-4'>
                <button className='bg-green-500 w-[20%] rounded-lg h-8'>S’inscrire</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Pfe