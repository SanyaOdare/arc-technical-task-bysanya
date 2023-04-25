import logo from './assets/arc-logo.png';
import './App.css';
import ARCCarousel from './components/carousel/ARCCarousel';

function App() {
  return (
    <div className="App">
      <img src={logo} className="ARC-logo" alt="logo" />
      <ARCCarousel />
    </div>
  );
}

export default App;
