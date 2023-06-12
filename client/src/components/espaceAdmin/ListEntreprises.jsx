import React, { useEffect, useState } from 'react'
import SideBareAdmin from './SideBareAdmin'
import CartEntreprise from './CartEntreprise'
import {TbSearch} from 'react-icons/tb'
import Header from '../Header'
import {Link} from "react-router-dom";



const ListEntreprise = () => {
  const [data,setData]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(()=>{
    fetch('http://localhost:4000/listeEntreprise',{
      credentials:'include',
    }).then(res=>{
    res.json().then(data=>{
      setData(data)
    })
  })
  },[])
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.secteur.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className='flex'>
      <SideBareAdmin/>
    
      <div className='h-full w-full'>
            
        {/* componenet */}
        <Header/>
        {/* componenet */}
        <form className='flex justify-end mr-7 '>
          <div className='relative flex items-center pt-4'>
          <input type="text" placeholder="Rechercher..." value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}  handleSearch={handleSearch} className='pl-6 border-2 border-black rounded-lg h-8'/>
            <TbSearch className='pl-1 absolute justify-end text-sky-400 text-xl' />
          </div>
        </form>
        <div className='flex gap-x-3 pl-5  h-11'>
          <Link to='/Admin/AddEntreprise'>
            <button className='bg-green-500 p-1 w-[80px] rounded-lg' type='submit'>Ajouter</button>
          </Link>
        </div>
        <div className='h-[80%]'>
          <h2 className='font-medium text-xl pl-5'>Entreprises :</h2>
          <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[30rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
            {/* componenet */}
            {
            filteredData.map((item,index)=>{
              return <CartEntreprise {...item}/>
            })
            }


            
            
            {/* componenet */}
          </div>
        </div>
            
      </div>
    </div>
  )
}

export default ListEntreprise