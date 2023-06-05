import React, { useState } from 'react'
import SideBareAdmin from './SideBareAdmin';
import Header from '../Header';
import {Link} from "react-router-dom";

const AddEntreprise = () => {
  const [nom,setNom]=useState('');
  const [secteur,setSecteur]=useState('');
  const [Representant,setRepresentant]=useState('');
  const [emailRep,setEmailRep]=useState('');
  const [numeroRep,setNumeroRep]=useState('');
  const [Localisation,setLocalisation]=useState('');
  const [email,setEmail]=useState('');
  const [numero,setNumero]=useState('');


  async function nouveauEntreprise(e){
    e.preventDefault();
    console.log({nom,secteur,Representant,emailRep,numeroRep,Localisation,email,numero});
    const response=await fetch('http://localhost:4000/addEntreprise',{
      method:'POST',
      body:JSON.stringify({nom,secteur,Representant,emailRep,numeroRep,Localisation,email,numero}),
      headers:{'Content-Type':'application/json'},
      credentials:'include'
    })
    
  }
  return (
    <>
      <div className='flex'>
        <SideBareAdmin/>

        <div className='h-full w-full'>
          {/* componenet */}
          <Header/>
          {/* componenet */}

          {/* compenant */}
          <div className='h-[90%] flex flex-col justify-around items-center'>
          <h2 className='text-xl font-bold'>Ajouter une entreprise :</h2>
          <form className='flex flex-col justify-center gap-y-4 w-[75%]' onSubmit={nouveauEntreprise}>
              <input placeholder='nom' className='border-black border-2 rounded-lg pl-2 h-9'
                value={nom} onChange={e=>setNom(e.target.value)} required/>
              <input placeholder='Secteur' className='border-black border-2 rounded-lg pl-2 h-9'
                value={secteur} onChange={e=>setSecteur(e.target.value)} required/>
              <input placeholder='Representant' className='border-black border-2 rounded-lg pl-2 h-9'
                value={Representant} onChange={e=>setRepresentant(e.target.value)} required/>
              <input placeholder='emailRep' className='border-black border-2 rounded-lg pl-2 h-9'
                value={emailRep} onChange={e=>setEmailRep(e.target.value)} required/>
              <input placeholder='numeroRep' className='border-black border-2 rounded-lg pl-2 h-9'
                value={numeroRep} onChange={e=>setNumeroRep(e.target.value)} required/>
              <input placeholder='Localisation' className='border-black border-2 rounded-lg pl-2 h-9'
                value={Localisation} onChange={e=>setLocalisation(e.target.value)} required/>
              <input placeholder='email' className='border-black border-2 rounded-lg pl-2 h-9'
                value={email} onChange={e=>setEmail(e.target.value)} required/>
              <input placeholder='numero' className='border-black border-2 rounded-lg pl-2 h-9'
                value={numero} onChange={e=>setNumero(e.target.value)} required/>
              <div className='flex gap-x-3 justify-end h-11'>
                  <Link to='/Admin/ListEntreprises'>
                  <button className='bg-red-500 w-[20%] rounded-lg'>Annuler</button>
                  </Link>
                  <button className='bg-green-500 w-[20%] rounded-lg' type='submit'>Ajouter</button>
              </div>
          </form>
          </div>  
          {/* compenant */}
        </div>
      </div>  
    </>
  )
}

export default AddEntreprise