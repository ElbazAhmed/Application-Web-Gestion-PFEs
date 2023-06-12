import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "../pages/inpt.png"


function SideBare() {
    const menuItem=[
        {
            path:'/ense/listPfe',
            name:'Liste des PFEs',
            icon:"",
        },
        {
            path:'/ense/addPfe',
            name:'Ajouter un PFE',
            icon:"",
        },
        {
            path:'/ense/myPfeEncadrer',
            name:'Mes sujet encadrés',
            icon:"",
        },
    ]
  return (
        <div className=' lg:w-[18%] w-[30%] h-[100vh]'>
            <div className=''>
                <img src={image} alt='INPT logo' className='lg:w-[90%] lg:mx-auto w-[80%] py-3' />
            </div>
            <div className='flex flex-col justify-center h-[75vh] text-center'>
            {
              menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index} className="border bg-sky-200  py-5" activeclassName='active'>
                    {item.name}
                </NavLink>
              ))  
            }
            </div>
        </div>
        
  )
}

export default SideBare