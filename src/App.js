import React from 'react';
import { Link } from 'react-router-link';
import SideBare from './componenet/SideBare';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import AddPFE from './pages/AddPFE';
import ListPFE from './pages/ListPFE';
import MonPFE from './pages/MonPFE';
import Registre from './registrationPage/Registre';
import Home from '../src/componenet/Home/Home'


function App() {
  
  return (
    <BrowserRouter>
      <SideBare>
        <Routes>
          <Route path="/" element={<ListPFE/>} />
          <Route path="/addPfe" element={<AddPFE/>} />
          <Route path="/myPfe" element={<MonPFE/>} />
        </Routes>
      </SideBare>
    </BrowserRouter>

    // <>
    // <BrowserRouter>
	  //   <Routes>
		//     <Route index patch='/' element={<Home/>} /> 
		//     <Route patch='Registre' element={<Registre/>} /> 
	  //   </Routes>
    // </BrowserRouter>
    // </>
  );
}

export default App;
