import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}

export default App;
