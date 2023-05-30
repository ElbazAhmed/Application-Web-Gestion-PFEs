import React from 'react'
import image from '../../assets/inpt.png'
import {Link, Navigate} from "react-router-dom";
import { useState } from 'react';

const Connexion = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [redirect,setRedirect]=useState(false)
  
    //il faut décider par rapport au mail dans le cas d'étudiant et par les role (cord,ense)
    

    async function login(e){
        e.preventDefault();
        const res=await fetch('http://localhost:4000/login',{
            method:'POST',
            body:JSON.stringify({email,password}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
        console.log(res.ok);
        if(res.ok){
            res.json().then((userInfo)=>{
                console.log(userInfo);
            })
        }else{
            alert('not defined')
        }


    }
    return (
    <div className='flex h-[100vh]'>
        <div className='lg:w-[60%] w-[100%] flex flex-col justify-between'>
            <div className="inpt__logo">
                <img src={image} alt='INPT logo' className='lg:w-[20%] lg:ml-3 mx-auto mt-5  w-[40%]'/>
            </div>
            <div className='flex flex-col justify-center items-center h-[70vh] py-5'>
                <div className='text-center'>
                    <h2 className='text-2xl text-sky-600 font-semibold'>CONNEXION AU COMPTE</h2>
                    <p className='py-3 text-xl font-medium'>Content de te revoir! veuillez saisir vos <br /> coordonnées</p>
                </div>
                <form className='flex flex-col justify-center items-center gap-y-3  text-start w-[40%]' onSubmit={login}>
                    <div className='w-[100%] font-semibold'><h3>Adresse email :</h3></div>
                    <input type="email" placeholder='Email' className=' border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <div className='w-[100%] font-semibold'><h3>Mot de passe :</h3></div>
                    <input type='password' placeholder='Mot de passe' className='border-sky-600 border-2 rounded-lg pl-2 h-9 w-[100%]' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <div className='w-[100%] text-end'>
                        <Link to='/ResetPassword'>
                            <a>Mot de passe oublié ?</a>
                        </Link>    
                    </div>
                    <button className='bg-sky-600 text-white p-2 rounded-xl mt-3 px-5' >Connexion</button>
                    <div className='w-[100%] text-center'>
                        <Link to='/Registre'>
                            <a>Vous n'avez pas de compte ?</a>
                        </Link>                        
                    </div>
                </form>
            </div>
            <div className="log__copy font-small my-1 px-1">&#169; 2023 Institut National des Postes et Télécommunications</div>
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

export default Connexion