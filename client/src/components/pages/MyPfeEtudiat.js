import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function MyPfeEtudiat() {
    const [monPfe,setMonPfe]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/monPfeEtudiant',{
            credentials:'include',
        }).then(res=>{
            res.json().then(async (data)=>{
                await setMonPfe(data)
            })
        })
    },[])
    if(monPfe.length != 0){
        return (
            <>
                <div className='container mx-auto flex flex-col gap-y-6 pt-11'>
                    <div>
                        <h2 className='text-2xl font-bold'>Titre :</h2>
                        <p className='pl-6'>{monPfe[0].titre}</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Problématique :</h2>
                        <p className='pl-6'>{monPfe[0].problematique}</p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Entreprise :</h2>
                        <p className='pl-6'>{monPfe[0].entreprise} </p>
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>Description :</h2>
                        <p className='pl-6'>{monPfe[0].description}</p>
                    </div>
                </div>
            </>
          )
    }else{
        return
    }
  
}

export default MyPfeEtudiat