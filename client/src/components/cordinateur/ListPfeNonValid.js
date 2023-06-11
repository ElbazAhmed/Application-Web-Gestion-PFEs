
import React ,{useState,useEffect}from 'react'
import { TbSearch } from 'react-icons/tb'
import CartPfeNonval from './CartPfeNonval'



function ListPfeNonValid() {
  const [data,setData]=useState([])
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(()=>{
    fetch('http://localhost:4000/listePfeNonValider',{credentials:'include'}).then(resp=>{
      resp.json().then(pfes=>{
        setData(pfes)
      });
    })
  },[])
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.problematique.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.entreprise.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (

    <>
        <form className='flex justify-end mr-7 '>
          <div className='relative flex items-center py-4'>
            <input placeholder='Rechercher' type='text' value={searchTerm} onChange={e=>setSearchTerm(e.target.value)}  handleSearch={handleSearch} className='pl-6 border-2 border-black rounded-lg h-8'/>
            <TbSearch className='pl-1 absolute justify-end text-sky-400 text-xl'/>
          </div>
        </form>

        <div className='h-[80%]'>
          <h2 className='font-medium text-xl pl-6 pb-4'>Les offres de PFE :</h2>
          <div className='w-[70%] mx-auto border-2 border-black rounded-md h-[30rem] overflow-scroll scrollbar scrollbar-thumb-sky-500 scrollbar-thin'>
            {/* componenet */}
            {
              filteredData.map((item,i)=>{
                return <CartPfeNonval {...item}/> 
              })
            }
            {/* componenet */}
          </div>
        </div>
    </>
  )
}

export default ListPfeNonValid