import React from 'react'
import ListPFE from './pages/ListPFE'
import AddPFE from './pages/AddPFE'
import MonPFE from './pages/MonPFE'
import Pfe from './pages/Pfe'
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import SideBare from './SideBare'

function MainPage() {
  return (
    <SideBare>
        <Routes>
          <Route path="/listPfe" element={<ListPFE/>} />
          <Route path="/addPfe" element={<AddPFE/>} />
          <Route path="/myPfe" element={<MonPFE/>} />
          <Route path='/pfe' element={<Pfe/>} />
        </Routes>
    </SideBare>
  )
}

export default MainPage