import React, { useState } from 'react';
import SideBareAdmin from './SideBareAdmin';
import Header from '../Header';
import {Link} from "react-router-dom";
var generator = require('generate-password-browser');

const AddUsers = () => {
  const [nom,setNom]=useState('');
  const [prenom,setPrenom]=useState('');
  const [filier,setFilier]=useState('ASEDS');
  const [specialite,setSpecialite]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [role,setRole]=useState('ETUDIANT');


  async function nouveauUser(e){
    e.preventDefault();
    console.log({nom,prenom,filier,specialite,email,password,role});
    const response=await fetch('http://localhost:4000/addUser',{
      method:'POST',
      body:JSON.stringify({nom,prenom,filier,specialite,email,password,role}),
      headers:{'Content-Type':'application/json'},
      credentials:'include'
    })
    //reset form
    setNom('');
    setPrenom('');
    setFilier('ASEDS');
    setSpecialite('');
    setEmail('');
    setPassword('');
    setRole('ETUDIANT');
    alert('utilisateur ajouter avec succés')
 }
 async function psswordGenerator(){
    var password = generator.generate({
        length: 10,
        numbers: true
    });
    setPassword(password);
 };

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
          <h2 className='text-xl font-bold py-4'>Ajouter un utilisateur :</h2>
          <form className='flex flex-col justify-center gap-y-4 w-[75%]' onSubmit={nouveauUser}>
              <input placeholder='Nom' className='border-black border-2 rounded-lg pl-2 h-9'
                value={nom} onChange={e=>setNom(e.target.value)} required/>
              <input placeholder='Prenom' className='border-black border-2 rounded-lg pl-2 h-9'
                value={prenom} onChange={e=>setPrenom(e.target.value)} required/>
              <select placeholder='Filier' className='border-black border-2 rounded-lg pl-2 h-9' value={filier} onChange={e=>setFilier(e.target.value)} required>
                <option value="ASEDS">ASEDS</option>
                <option value="DATA">DATA</option>
                <option value="CLOUD">CLOUD</option>
                <option value="SESNUM">SESNUM</option>
                <option value="ICCN">ICCN</option>
                <option value="SMART ICT">SMART ICT</option>
                <option value="AMOA">AMOA</option>
              </select>
              <input placeholder='Specialite' className='border-black border-2 rounded-lg pl-2 h-9'
                value={specialite} onChange={e=>setSpecialite(e.target.value)} required/>
              <input placeholder='Email' className='border-black border-2 rounded-lg pl-2 h-9'
                value={email} onChange={e=>setEmail(e.target.value)} required/>
              <p placeholder='Password' className='border-black border-2 rounded-lg pl-2 h-9 flex justify-between '>
                    <span className=' w-[80%]'>{password}</span>
                    <button type='button' className='bg-sky-600 w-[20%]' onClick={() => {psswordGenerator()}} >Generer mot de pass</button>
              </p>
              <select placeholder='Poste' className='border-black border-2 rounded-lg pl-2 h-9' value={role} onChange={e=>setRole(e.target.value)} required>
                <option value="ETUDIANT">ETUDIANT</option>
                <option value="ENSEIGNANT">ENSEIGNANT</option>
                <option value="COORDINATEUR">COORDINATEUR</option>
                <option value="ADMIN">ADMIN</option>
              </select>
              <div className='flex gap-x-3 justify-end h-11'>
                  <Link to='/Admin/ListUsers' className='bg-red-500 w-[20%] rounded-lg flex justify-center' >
                  <button >Annuler</button>
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