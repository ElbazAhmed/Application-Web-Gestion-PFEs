import React, { useEffect, useState } from 'react'
import CartPfe from './CartPfe'

const Listpfe = () => {

  const [data,setData]=useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:4000/listePfeInscrire',{
      credentials:'include',
    }).then(res=>{
    res.json().then(data=>{
      setData(data)
    })
  })
  },[])

  return (
    <>
        <div className='h-[80%]'>
          <h2 className='font-medium text-xl'>Vos offres :</h2>
          <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[30rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
            {/* componenet */}
           {
            data.map((item,index)=>{
              return <CartPfe {...item}/>
            })
           }
           {/* componenet */}
          </div>
        </div>
    </>
  )
}

export default Listpfe