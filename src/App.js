import logo from './assets/arc-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ARCCarousel from './components/carousel/ARCCarousel';
import ARCNavbar from './components/navbar/ARCNavbar';

import { NavLink } from 'react-bootstrap';
import KeyFacts from './components/keyfacts/KeyFacts';
import Fixtures from './components/fixtures/Fixtures';


function App() {
  return (
    <div className="App">
      <NavLink href="/home">
        <img src={logo} className="ARC-logo" alt="logo" />
      </NavLink>
      <ARCNavbar />
      <ARCCarousel />
      <KeyFacts />
      <Fixtures />
    </div>
  );
}

export default App;
