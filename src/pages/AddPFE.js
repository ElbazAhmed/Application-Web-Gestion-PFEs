import React from 'react'
import Header from '../componenet/Header'


function AddPFE() {
  return (
    <div className='h-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}

        <div className='h-[90%] flex flex-col justify-around items-center'>
            <h2 className='text-xl font-bold'>Ajouter un sujet de PFE :</h2>
            <form className='flex flex-col justify-center gap-y-4 w-[75%]'>
                <input placeholder='Titre' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <input placeholder='Domaine de recherche' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <input placeholder='Problematique' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <input placeholder='Entreprise' className='border-black border-2 rounded-lg pl-2 h-9'/>
                <textarea id="message" rows="4" className="border-black border-2 rounded-lg pl-2" placeholder="Description"></textarea>
                <div className='flex gap-x-3 justify-end h-11'>
                    <button className='bg-red-500 w-[20%] rounded-lg'>Annuler</button>
                    <button className='bg-green-500 w-[20%] rounded-lg'>Ajouter</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPFE