import React from 'react'
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import Header from '../Header'
import SideBareAdmin from './SideBareAdmin'
import Pfe from '../pages/Pfe'
import ListPFE from '../pages/ListPFE'
import AddPFE from '../pages/AddPFE'

const Admin = () => {
  return (
    <div className='flex'>
        <SideBareAdmin/>
    <div className='h-full w-full'>
        {/* componenet */}
        <Header/>
        {/* componenet */}



    
    </div>
    </div>
  )
}

export default Admin