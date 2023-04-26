import logo from './assets/arc-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ARCCarousel, ARCNavbar, KeyFacts } from './components/elements';

import { NavLink } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <NavLink href="/home">
        <img src={logo} className="ARC-logo" alt="logo" />
      </NavLink>
      <ARCNavbar />
      <ARCCarousel />
      <KeyFacts />
    </div>
  );
};

export default App;
