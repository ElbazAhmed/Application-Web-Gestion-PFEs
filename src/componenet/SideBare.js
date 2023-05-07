import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "../image/Logo_inpt.PNG"

function SideBare({children}) {
    const menuItem=[
        {
            path:'/',
            name:'Liste des PFE',
            icon:"",
        },
        {
            path:'/addPfe',
            name:'Ajouter un PFE',
            icon:"",
        },
        {
            path:'/myPfe',
            name:'Mon PFE',
            icon:"",
        },
    ]
  return (
    <div className='flex '>
        <div className=' lg:w-[18%] w-[30%] h-[100vh]'>
            <div className=''>
                <img src={image} alt='INPT logo' className='lg:w-[90%] lg:mx-auto w-[80%]' />
            </div>
            <div className='flex flex-col justify-center h-[85vh] '>
            {
              menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="border bg-sky-200  py-5" activeclassName='active'>
                    {item.name}
                </NavLink>
              ))  
            }
            </div>
        </div>
        <main className='w-full'>{children}</main>
    </div>
  )
}

export default SideBare