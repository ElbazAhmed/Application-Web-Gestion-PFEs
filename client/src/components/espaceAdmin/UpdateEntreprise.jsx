import React, { useEffect, useState } from 'react'
import SideBareAdmin from './SideBareAdmin';
import Header from '../Header';
import {Link, useLocation} from "react-router-dom";

const UpdateEntreprise = () => {
    const [redirict,setRedirict]=useState(false)
    
    const location=useLocation();
    const data=location.state; 
  const [nom,setNom]=useState(data.nom);
  const [secteur,setSecteur]=useState(data.secteur);
  const [Representant,setRepresentant]=useState(data.Representant);
  const [emailRep,setEmailRep]=useState(data.emailRep);
  const [numeroRep,setNumeroRep]=useState(data.numeroRep);
  const [Localisation,setLocalisation]=useState(data.Localisation);
  const [email,setEmail]=useState(data.email);
  const [numero,setNumero]=useState(data.numero);

 



  async function UpdateEntreprise(e){
    e.preventDefault();
    console.log({nom,secteur,Representant,emailRep,numeroRep,Localisation,email,numero});
    
        // PUT request using fetch with set headers
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nom,secteur,Representant,emailRep,numeroRep,Localisation,email,numero})
        };
        fetch(`http://localhost:4000/Admin/updateEntreprise/${data._id}`, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data));
   
    
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
          <h2 className='text-xl font-bold py-4'>Ajouter une entreprise :</h2>
          <form className='flex flex-col justify-center gap-y-4 w-[75%]' onSubmit={UpdateEntreprise}>
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
                  <Link to='/Admin/ListEntreprises' className='bg-red-500 w-[20%] rounded-lg flex justify-center'>
                  <button >Annuler</button>
                  </Link>
                  <button className='bg-green-500 w-[20%] rounded-lg'>Modifier</button>
              </div>
          </form>
          </div>  
          {/* compenant */}
        </div>
      </div>  
    </>
  )
}

export default UpdateEntreprise