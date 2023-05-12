import React from 'react'
import { NavLink } from 'react-router-dom'
import image from "../../assets/inpt.png"

const SideBareAdmin = () => {
    const menuItem=[
        {
            path:'/Admin/listPfe',
            name:'Liste des PFE',
            icon:"",
        },
        {
            path:'/Admin/addPfe',
            name:'Ajouter un PFE',
            icon:"",
        },
        {
            path:'/Admin/ListEntreprises',
            name:'Entreprises',
            icon:"",
        },
    ]
  return (
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
  )
}

export default SideBareAdmin