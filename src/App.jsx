import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>
          <Route path = "/" element={<Inicio />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/acceso" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
