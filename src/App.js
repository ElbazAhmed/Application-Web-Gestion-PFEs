import React from 'react';
import { Routes,Route,BrowserRouter} from 'react-router-dom';
import AddPFE from './components/pages/AddPFE';
import ListPFE from './components/pages/ListPFE';
import MonPFE from './components/pages/MonPFE';
import Registre from './registrationPage/Registre';
import Home from './components/Home/Home';
import Connexion from './components/connexion/Connexion'
import ResetPassword from './components/resetpassword/ResetPassword';
import ChangePassword from './components/changePassword/ChangePassword';
import Contact from './components/contact/Contact';
import Pfe from './components/pages/Pfe';
import Admin from './components/espaceAdmin/Admin';
import Enseignant from './components/espaceEnseignant/Enseignant';
import ListEntreprises from './components/espaceAdmin/ListEntreprises';
import Entreprise from './components/espaceAdmin/Entreprise';



function App() {
  
  return (
    <BrowserRouter>

      <Routes>
		    <Route index path='/' element={<Home/>} />
		    <Route path='/Registre' element={<Registre/>} /> 
        <Route path='/Connexion' element={<Connexion/>} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
        <Route path='/ChangePassword' element={<ChangePassword/>} />

        <Route path='/Contact' element={<Contact/>} />

        <Route path="/gest/listPfe" element={<ListPFE/>} />
        <Route path="/gest/addPfe" element={<AddPFE/>} />
        <Route path="/gest/myPfe" element={<MonPFE/>} />
        <Route path='/gest/pfe' element={<Pfe/>} />
        {/*Espace Admin*/}
        <Route path='/EspaceAdmin' element={<Admin/>} />
        <Route path="/Admin/ListEntreprises" element={<ListEntreprises/>} />
        <Route path='/Admin/Entreprise' element={<Entreprise/>} />
        <Route path="/Admin/listPfe" element={<ListPFE/>} />
        <Route path="/Admin/addPfe" element={<AddPFE/>} />
        <Route path='/Admin/pfe' element={<Pfe/>} />
        {/*Espace Enseignant*/}
        <Route path='/EspaceEnseignant' element={<Enseignant/>} />

      </Routes> 

      

    </BrowserRouter>

    
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
