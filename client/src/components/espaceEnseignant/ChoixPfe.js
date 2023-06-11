import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

function ChoixPfe() {
    const [redirict,setRedirict]=useState(false)
    const location=useLocation();
    const data=location.state;

    async function encadrer(){
        const resp=await fetch('http://localhost:4000/encadrer',{
            method:'PUT',
            body:JSON.stringify({id:data._id}),
            headers:{'Content-Type':'application/json'},
            credentials:'include',
        })
        if(resp.ok){
            setRedirict(true)
        }
    }
    if(redirict){
        return <Navigate to={"/ense/listPfe"}/>
    }

  return (
        <div className='container mx-auto flex flex-col gap-y-6 pl-6 pt-11'>
            <div>
                <h2 className='text-2xl font-bold'>Titre :</h2>
                <p className='pl-6'>{data.titre}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Domain d'étude :</h2>
                <p className='pl-6'>{data.domainEtude}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Problématique :</h2>
                <p className='pl-6'>{data.problematique}</p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Entreprise :</h2>
                <p className='pl-6'>{data.entreprise} </p>
            </div>
            <div>
                <h2 className='text-2xl font-bold'>Description :</h2>
                <p className='pl-6'>{data.description}</p>
            </div>
            <div className='flex justify-end mr-7 pt-4'>
                <button className='bg-green-500 w-[20%] rounded-lg h-8' onClick={encadrer}>Encadrer</button>
            </div>
        </div>
  )
}

export default ChoixPfe