import React from 'react';
import { Link } from 'react-router-link';
import SideBare from './componenet/SideBare';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import AddPFE from './pages/AddPFE';
import ListPFE from './pages/ListPFE';
import MonPFE from './pages/MonPFE';

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
  );
}

export default App;
