import React, { useState } from 'react'
import {Navigate} from "react-router-dom";
import image from "../assets/inpt.png"
import graduation from '../assets/pexels-pavel-danilyuk-7944065.jpg'

function Registre() {
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [filier,setFilier]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const [redirect,setRedirect]=useState(false)

  async function regist(e){
    e.preventDefault();
    if(confirmPassword==password){
      const res=  await fetch('http://localhost:4000/registre',{
            method:'POST',
            body:JSON.stringify({nom,prenom,filier,email,password}),
            headers:{'Content-Type':'application/json'}
          })
        if(res.status===200){
          alert("registration successful")
          setRedirect(true)
        }else {
          alert('user is alredy exist');
        }
    }else{
      alert('password not confirmed')
    }


  }
  if(redirect===true){
    return <Navigate to={'/Connexion'}/>
  }
  return (
    <div className='flex h-[100vh]'>
        <div className='lg:w-[60%] w-[100%] '>
            <img src={image} alt='INPT logo' className='lg:w-[20%] lg:ml-3 mx-auto mt-5  w-[40%]'/>
            <div className='flex flex-col justify-center items-center h-[70vh]'>
                <h2 className='text-2xl text-sky-600'>REGISTRATION</h2>
                <p className='py-3 text-xl font-medium'>veuillez saisir vos coordonnées</p>
                <form className='flex flex-col justify-center items-center gap-y-3 h-[70%]' onSubmit={regist}>
                  <div className='flex flex-col gap-y-2 gap-x-2 lg:flex-row'>
                    <input placeholder='Nom' className='border-sky-600 border-2 rounded-lg pl-2 h-9' value={nom} onChange={e=>setNom(e.target.value)} required/>
                    <input placeholder='Prenom' className='border-sky-600 border-2 rounded-lg pl-2 h-9' value={prenom} onChange={e=>setPrenom(e.target.value)} required/>
                  </div>
                  <input placeholder='Fillière' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={filier} onChange={e=>setFilier(e.target.value)} required/>
                  <input placeholder='Email' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={email} onChange={e=>setEmail(e.target.value)} required/>
                  <input placeholder='Mot de passe' type='password' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={password} onChange={e=>setPassword(e.target.value)} required/>
                  <input placeholder='Confirmer mot de passe' type='password' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required/>
                  <button className='bg-sky-600 text-white p-2 rounded-xl mt-3' type='submit'>Créer un compte</button>
                </form>
            </div>
        </div>
        <div className='backimage lg:w-[50%] w-full bg-cover mix-blend-overlay flex justify-center text-center items-center'>
            <div className='w-[70%] h-[80%] flex justify-center text-center items-center'>
                <div className='font-semibold text-white text-[50px] '>
                    Un pas plus prés de votre PFE ...Un pas vers votre Graduation   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registre 