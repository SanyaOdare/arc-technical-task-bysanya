import logo from './assets/arc-logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ARCCarousel from './components/carousel/ARCCarousel';
import ARCNavbar from './components/navbar/ARCNavbar';


function App() {
  return (
    <div className="App">
      <img src={logo} className="ARC-logo" alt="logo" />
      <ARCNavbar />
      <ARCCarousel />
    </div>
  );
}

export default App;
