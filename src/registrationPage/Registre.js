import React from 'react'
import image from "../image/Logo_inpt.PNG"
import graduation from '../image/pexels-pavel-danilyuk-7944065.jpg'

function Registre() {
  return (
    <div className='flex h-[100vh]'>
        <div className='lg:w-[60%] w-[100%] '>
            <img src={image} alt='INPT logo' className='lg:w-[20%] lg:ml-3 mx-auto mt-5  w-[40%]'/>
            <div className='flex flex-col justify-center items-center h-[70vh]'>
                <h2 className='text-2xl text-sky-600'>REGISTRATION</h2>
                <p className='py-3 text-xl font-medium'>veuillez saisir vos coordonnées</p>
                <form className='flex flex-col justify-center items-center gap-y-3 h-[70%]'>
                  <div className='flex flex-col gap-y-2 gap-x-2 lg:flex-row'>
                    <input placeholder='Nom' className='border-sky-600 border-2 rounded-lg pl-2 h-9'/>
                    <input placeholder='Prenom' className='border-sky-600 border-2 rounded-lg pl-2 h-9'/>
                  </div>
                  <input placeholder='Fillière' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                  <input placeholder='Email' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                  <input placeholder='Mot de passe' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                  <input placeholder='Confirmer mot de passe' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]'/>
                  <button className='bg-sky-600 text-white p-2 rounded-xl mt-3'>Créer un compte</button>
                </form>
            </div>
        </div>
        <div className='backimage lg:w-[40%] lg:inline-block hidden w-full bg-cover mix-blend-overlay'></div>
    </div>
  )
}

export default Registre