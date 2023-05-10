import React from 'react';
import { Link } from 'react-router-link';
import SideBare from './components/SideBare';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import AddPFE from './pages/AddPFE';
import ListPFE from './pages/ListPFE';
import MonPFE from './pages/MonPFE';
import Registre from './registrationPage/Registre';
import Home from './components/Home/Home';
import Connexion from './components/connexion/Connexion'
import ResetPassword from './components/resetpassword/ResetPassword';
import ChangePassword from './components/changePassword/ChangePassword';

function App() {
  
  return (
    // <BrowserRouter>
    //   <SideBare>
    //     <Routes>
    //       <Route path="/" element={<ListPFE/>} />
    //       <Route path="/addPfe" element={<AddPFE/>} />
    //       <Route path="/myPfe" element={<MonPFE/>} />
    //     </Routes>
    //   </SideBare>
    // </BrowserRouter>

    <>
    <BrowserRouter>
      <Routes>
		    <Route index path='/' element={<Home/>} /> 
		    <Route path='/Registre' element={<Registre/>} /> 
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
        <Route path='/ChangePassword' element={<ChangePassword/>} />
      </Routes> 
    </BrowserRouter>
    </>
  );
}

export default App;
