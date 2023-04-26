import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './assets/arc-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ARCCarousel, ARCNavbar, KeyFacts, Fixtures } from './components/elements';
import Home from '../src/pages/home/Home';

import { NavLink } from 'react-bootstrap';


function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <NavLink href="/home">
          <img src={logo} className="ARC-logo" alt="logo" />
        </NavLink>
        <ARCNavbar />
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/keyfacts/:id' exact element={<KeyFacts />} />
          <Route path='/keyfacts/:id' exact element={<KeyFacts />} />
        </Routes>
      </BrowserRouter>
      
      
      <ARCCarousel />
      <KeyFacts />
      <Fixtures />
    </div>
  );
};

export default App;
