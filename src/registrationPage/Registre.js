import React, { useState } from 'react'
import image from "../assets/inpt.png"
import graduation from '../assets/pexels-pavel-danilyuk-7944065.jpg'

function Registre() {
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [filier,setFilier]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')

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
        }else{
          alert('user is alredy exist');
        }
    }else{
      alert('password not confirmed')
    }

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
                    <input placeholder='Nom' className='border-sky-600 border-2 rounded-lg pl-2 h-9' value={nom} onChange={e=>setNom(e.target.value)}/>
                    <input placeholder='Prenom' className='border-sky-600 border-2 rounded-lg pl-2 h-9' value={prenom} onChange={e=>setPrenom(e.target.value)}/>
                  </div>
                  <input placeholder='Fillière' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={filier} onChange={e=>setFilier(e.target.value)}/>
                  <input placeholder='Email' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={email} onChange={e=>setEmail(e.target.value)}/>
                  <input placeholder='Mot de passe' type='password' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={password} onChange={e=>setPassword(e.target.value)}/>
                  <input placeholder='Confirmer mot de passe' type='password' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
                  <button className='bg-sky-600 text-white p-2 rounded-xl mt-3'>Créer un compte</button>
                </form>
            </div>
        </div>
        <div className='backimage lg:w-[40%] lg:inline-block hidden w-full bg-cover mix-blend-overlay'></div>
    </div>
  )
}

export default Registre