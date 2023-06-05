import React, { useEffect, useState } from 'react'

import CartPfeEnca from './CartPfeEnca'

function ListePfeEnca() {
  
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/listencadrer',{credentials:'include'}).then(resp=>{
      resp.json().then(pfes=>{
        setData(pfes)
      });
    })
  },[])
  
  return (
    <>
        <div className='h-[80%]'>
          <h2 className='font-medium text-xl'>Vos offres :</h2>
          <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[30rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
            {/* componenet */}
          
            {
             data.map((item,i)=>{
              return <CartPfeEnca {...item}/>
             })
            }


            {/* componenet */}
          </div>
        </div>
    </>
  )
}

export default ListePfeEnca