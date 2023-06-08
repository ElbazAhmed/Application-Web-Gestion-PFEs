import React, { useEffect, useState } from 'react'
import Dropdowns from '../Dropdowns'
import { FaUserCircle } from 'react-icons/fa'

function InforPers() {
    
    const [data,setData]=useState({})

    useEffect(()=>{
        fetch('http://localhost:4000/refrech',{
            credentials:'include'
        }).then(res=>{
            res.json().then(data=>{
                setData(data)
                console.log(data);
            })
        })
    },[])
  return (
    <>
        <div className='flex justify-between items-center h-16'>
            <h1 className='text-4xl text-sky-600 font-semibold pl-3'>Projet de Fin d’études</h1>
            <div className='flex items-center pr-2'>

                <Dropdowns childrent={<FaUserCircle className='text-2xl'/>}/>
            </div>

        </div>
        <div className='h-[85vh] flex flex-col gap-9 justify-center items-center'>
            <h2>nom : {data.nom}</h2>
            <h2>prenom {data.prenom}</h2>
            <h2>email {data.email}</h2>
            {data.filier ? <h2>filière: {data.filier}</h2>  :"" }
            {data.specialite ? <h2>spécialité: {data.specialite}</h2>  :"" }
            <h2>post : {data.role}</h2>
        </div>
    </>
  )
}

export default InforPers