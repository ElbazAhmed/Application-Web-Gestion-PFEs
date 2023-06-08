import React, { useState } from 'react'
import SideBareAdmin from './SideBareAdmin';
import Header from '../Header';
import {Link} from "react-router-dom";

const AddUsers = () => {
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [filier,setFilier]=useState('');
  const [specialite,setSpecialite]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('');

  async function nouveauUser(e){
    e.preventDefault();
    console.log({nom,prenom,filier,specialite,email,password,role});
    const response=await fetch('http://localhost:4000/addUser',{
      method:'POST',
      body:JSON.stringify({nom,prenom,filier,specialite,email,password,role}),
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
          <h2 className='text-xl font-bold'>Ajouter un utilisateur :</h2>
          <form className='flex flex-col justify-center gap-y-4 w-[75%]' onSubmit={nouveauUser}>
              <input placeholder='Nom' className='border-black border-2 rounded-lg pl-2 h-9'
                value={nom} onChange={e=>setNom(e.target.value)} required/>
              <input placeholder='Prenom' className='border-black border-2 rounded-lg pl-2 h-9'
                value={prenom} onChange={e=>setPrenom(e.target.value)} required/>
              <input placeholder='Filier' className='border-black border-2 rounded-lg pl-2 h-9'
                value={filier} onChange={e=>setFilier(e.target.value)} required/>
              <input placeholder='Specialite' className='border-black border-2 rounded-lg pl-2 h-9'
                value={specialite} onChange={e=>setSpecialite(e.target.value)} required/>
              <input placeholder='Email' className='border-black border-2 rounded-lg pl-2 h-9'
                value={email} onChange={e=>setEmail(e.target.value)} required/>
              <input placeholder='Password' className='border-black border-2 rounded-lg pl-2 h-9'
                value={password} onChange={e=>setPassword(e.target.value)} required/>
              <input placeholder='Poste' className='border-black border-2 rounded-lg pl-2 h-9'
                value={role} onChange={e=>setRole(e.target.value)} required/>
              <div className='flex gap-x-3 justify-end h-11'>
                  <Link to='/Admin/ListUsers'>
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

export default AddUsers