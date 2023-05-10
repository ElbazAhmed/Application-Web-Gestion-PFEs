import React from 'react';
import { Link } from 'react-router-link';
import SideBare from './components/SideBare';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import AddPFE from './components/pages/AddPFE';
import ListPFE from './components/pages/ListPFE';
import MonPFE from './components/pages/MonPFE';
import Registre from './registrationPage/Registre';

import Home from './components/Home/Home';
import Connexion from './components/connexion/Connexion'
import ResetPassword from './components/resetpassword/ResetPassword';
import ChangePassword from './components/changePassword/ChangePassword';


import Pfe from './components/pages/Pfe';




function App() {
  
  return (
    <BrowserRouter>

      <Routes>
		    <Route index path='/' element={<Home/>} />
		    <Route path='/Registre' element={<Registre/>} /> 
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
        <Route path='/ChangePassword' element={<ChangePassword/>} />
        <Route path="/gest/listPfe" element={<ListPFE/>} />
        <Route path="/gest/addPfe" element={<AddPFE/>} />
        <Route path="/gest/myPfe" element={<MonPFE/>} />
        <Route path='/gest/pfe' element={<Pfe/>} />
      </Routes> 

      

    </BrowserRouter>

    // <>
    // <BrowserRouter>
	  //   <Routes>
		//     <Route index patch='/' element={<Home/>} /> 
		//     <Route patch='Registre' element={<Registre/>} /> 
	  //   </Routes>
    // </BrowserRouter>
    // </>

    
    // <SideBare>
    //     <Routes>
    //       <Route path="/gest/listPfe" element={<ListPFE/>} />
    //       <Route path="/gest/addPfe" element={<AddPFE/>} />
    //       <Route path="/gest/myPfe" element={<MonPFE/>} />
    //       <Route path='/gest/pfe' element={<Pfe/>} />
    //     </Routes>
    // </SideBare>
  );
}

export default App;
