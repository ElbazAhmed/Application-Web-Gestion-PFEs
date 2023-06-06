import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {Usercontext} from './Usercontext'
import { Navigate } from 'react-router-dom';

const Addpfe = () => {

  const [titre,setTitre]=useState('');
  const [domainEtude,setDomainEtude]=useState('');
  const [problematique,setProblematique]=useState('');
  const [entreprise,setEntreprise]=useState('');
  const [description,setDescription]=useState('');
  const [rediriger,setRediriger]=useState(false)

  const {setUserInfo,userInfo}=useContext(Usercontext)
  
  async function nouveauPfe(e){
    e.preventDefault();
    const response=await fetch('http://localhost:4000/addpfe',{
      method:'POST',
      body:JSON.stringify({titre,domainEtude,problematique,entreprise,description}),
      headers:{'Content-Type':'application/json'},
      credentials:'include'
    })
    setRediriger(response.ok)
    
  }
  if(rediriger==true && userInfo.role=='ETUDIANT'){
    return <Navigate to={'/gest/listPfe'}/>
  }else if(rediriger==true && userInfo.role=='ENSEIGNANT'){
    return <Navigate to={'/ense/listPfe'}/>
  }else if(rediriger==true && userInfo.role=='COORDINATEUR'){
    return <Navigate to={'/cord/listPfe'}/>
  }


  return (
    <>
        <div className='h-[90%] flex flex-col justify-around items-center'>
            <h2 className='text-xl font-bold'>Ajouter un sujet de PFE :</h2>
            <form className='flex flex-col justify-center gap-y-4 w-[75%]' onSubmit={nouveauPfe}>
                <input placeholder='Titre' className='border-black border-2 rounded-lg pl-2 h-9'
                  value={titre} onChange={e=>setTitre(e.target.value)} required/>
                <input placeholder='Domaine de recherche' className='border-black border-2 rounded-lg pl-2 h-9'
                  value={domainEtude} onChange={e=>setDomainEtude(e.target.value)} required/>
                <input placeholder='Problematique' className='border-black border-2 rounded-lg pl-2 h-9'
                  value={problematique} onChange={e=>setProblematique(e.target.value)} required/>
                <input placeholder='Entreprise' className='border-black border-2 rounded-lg pl-2 h-9'
                  value={entreprise} onChange={e=>setEntreprise(e.target.value)} required/>
                <textarea id="message" rows="4" className="border-black border-2 rounded-lg pl-2" placeholder="Description" 
                  value={description} onChange={e=>setDescription(e.target.value)} required></textarea>
                <div className='flex gap-x-3 justify-end h-11'>
                    <button className='bg-red-500 w-[20%] rounded-lg'>Annuler</button>
                    <button className='bg-green-500 w-[20%] rounded-lg' type='submit'>Ajouter</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Addpfe