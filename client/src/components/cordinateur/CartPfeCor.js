
import React from 'react'
import { Link } from 'react-router-dom'

function CartPfeCor(props) {
  return (
    <Link to={'/cord/pfeCord'} state={props}>   
        <div className='border-2 border-black w-[95%] rounded-md mx-auto px-3 py-3 my-2 flex flex-row items-center justify-between'>
          <div className='flex flex-col '>
            <div>
              <h2 className='font-bold'>{props.problematique}</h2>
              <p>{props.entreprise}  </p>
            </div>
            <h1>{((Math.round(props.similaire * 100)/100).toFixed(1))*100}%</h1>
          </div>
          
          <div className='flex flex-col justify-end gap-1 pl-1'>
          
            <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
            <div className='w-[5px] h-[5px] rounded-full bg-black'></div>
            <div className='w-[5px] h-[5px] rounded-full bg-black'></div> 
          </div>
          
        </div>
        
    </Link>
  )
}


export default CartPfeCor