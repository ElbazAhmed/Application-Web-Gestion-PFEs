import React from 'react'
<<<<<<<< HEAD:client/src/components/pages/Pfe.js
import Header from '../Header'
import SideBare from '../SideBare'

function Pfe() {


  return (
    <div className='flex'>
        <SideBare/>
========
import SideBareAdmin from './SideBareAdmin'
import Header from '../Header'

const Entreprise = () => {
  return (
    <div className='flex'>
        <SideBareAdmin/>
>>>>>>>> ilyas:client/src/components/espaceAdmin copy/Entreprise.jsx
    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}
        <div className='container mx-auto flex flex-col gap-y-6 pt-11'>
            <div>
<<<<<<<< HEAD:client/src/components/pages/Pfe.js
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
========
                <h2 className='text-2xl font-bold'>Nom d'entrepise :</h2>
                <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Secteur :</h2>
                <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit.</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Secteur :</h2>
                <p className='pl-6'>Lorem ipsum dolor </p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Contact :</h2>
>>>>>>>> ilyas:client/src/components/espaceAdmin copy/Entreprise.jsx
                <p className='pl-6'>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua
                    . Ut enim ad minim veniam, quis nostrum exercitationem ullam  esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
<<<<<<<< HEAD:client/src/components/pages/Pfe.js
            <div className='flex justify-end mr-7 pt-4'>
                <button className='bg-green-500 w-[20%] rounded-lg h-8'>S’inscrire</button>
            </div>
========
>>>>>>>> ilyas:client/src/components/espaceAdmin copy/Entreprise.jsx
        </div>
    </div>
    </div>
  )
}

<<<<<<<< HEAD:client/src/components/pages/Pfe.js
export default Pfe
========
export default Entreprise
>>>>>>>> ilyas:client/src/components/espaceAdmin copy/Entreprise.jsx
