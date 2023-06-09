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
import AddPfe from './components/espaceEnseignant/AddPfe';
import ListePfe from './components/espaceEnseignant/ListePfe';
import MesPfe from './components/espaceEnseignant/MesPfe';
//espace Admin Components
import AddPfeAdmin from './components/espaceAdmin/AddPfeAdmin';
import ListPfeAdmin from './components/espaceAdmin/ListPfeAdmin';
import PfeAdmin from './components/espaceAdmin/PfeAdmin';
import ListEntreprises from './components/espaceAdmin/ListEntreprises';
import Entreprise from './components/espaceAdmin/Entreprise';
import AddUsers from './components/espaceAdmin/AddUsers';
import ListUsers from './components/espaceAdmin/ListUsers';
import User from './components/espaceAdmin/User';
import AddEntreprise from './components/espaceAdmin/AddEntreprise';
import UpdateEntreprise from './components/espaceAdmin/UpdateEntreprise';
import PfeEncadrer from './components/espaceEnseignant/PfeEncadrer';
import Layout from './components/cordinateur/Layout';
import PfeCord from './components/cordinateur/PfeCord';
import ListPfeCor from './components/cordinateur/ListPfeCor';
import ListPfeNonValid from './components/cordinateur/ListPfeNonValid';
import PfeNonValid from './components/cordinateur/PfeNonValid';
import AddPfeCor from './components/cordinateur/AddPfeCor';
import MonPfeCor from './components/cordinateur/MonPfeCor';
import ChoixPfe from './components/espaceEnseignant/ChoixPfe';
import LayoutEnse from './components/espaceEnseignant/LayoutEnse';
import PfeEncadrerCord from './components/cordinateur/PfeEncadrerCord';

import {UserContextProvide} from './components/Usercontext'
import InforPers from './components/infopersonel/InforPers';

function App() {
  
  return (
    <UserContextProvide>
      <BrowserRouter>

        <Routes>
		      <Route index path='/' element={<Home/>} />
		      <Route path='/Registre' element={<Registre/>} /> 
          <Route path='/Connexion' element={<Connexion/>} />
          <Route path='/ResetPassword' element={<ResetPassword/>} />
          <Route path='/ChangePassword' element={<ChangePassword/>} />

          <Route path='/info' element={<InforPers/>} />

          <Route path='/Contact' element={<Contact/>} />

          <Route path="/gest/listPfe" element={<ListPFE/>} />
          <Route path="/gest/addPfe" element={<AddPFE/>} />
          <Route path="/gest/myPfe" element={<MonPFE/>} />
          <Route path='/gest/pfe' element={<Pfe/>} />
          {/*Espace Admin*/}
          <Route path='/EspaceAdmin' element={<Admin/>} />
          <Route path="/Admin/ListEntreprises" element={<ListEntreprises/>} />
          <Route path='/Admin/Entreprise' element={<Entreprise/>} />
          <Route path='/Admin/AddEntreprise' element={<AddEntreprise/>} />
          <Route path='/Admin/UpdateEntreprise' element={<UpdateEntreprise/>} />
          <Route path="/Admin/ListUsers" element={<ListUsers/>} />
          <Route path='/Admin/User' element={<User/>} />
          <Route path='/Admin/AddUsers' element={<AddUsers/>} />
          <Route path="/Admin/listPfe" element={<ListPfeAdmin/>} />
          <Route path="/Admin/addPfe" element={<AddPfeAdmin/>} />
          <Route path='/Admin/pfe' element={<PfeAdmin/>} />
          <Route path="/Admin/PfeAdmin" element={<PfeAdmin/>} />
          {/*Espace Enseignant*/}
          <Route path='/ense' element={<LayoutEnse/>}>
            <Route path='/ense/ChoixPfe' element={<ChoixPfe/>}/>
            <Route path='/ense/listPfe' element={<ListePfe/>} />
            <Route path='/ense/addPfe' element={<AddPfe/>} />
            <Route path='/ense/myPfeEncadrer' element={<MesPfe/>} />
            <Route path='/ense/PfeEnca' element={<PfeEncadrer/>} />
          </Route>

          {/* espace cordinateur */}
          <Route path='/cord' element={<Layout/>}>
            <Route path='/cord/PfeCordEncadrer' element={<PfeEncadrerCord/>}/>
            <Route path='/cord/pfeCord' element={<PfeCord/>}/>
            <Route path='/cord/listPfe' element={<ListPfeCor/>}/>
            <Route path='/cord/listPfeNonValid' element={<ListPfeNonValid/>}/>
            <Route path='/cord/pfeCordNonVald' element={<PfeNonValid/>}/>
            <Route path='/cord/addPfe' element={<AddPfeCor/>}/>
            <Route path='/cord/myPfe' element={<MonPfeCor/>} />
          </Route>

        

        </Routes> 

      

      </BrowserRouter>
    </UserContextProvide>

    

  );
}

export default App;
