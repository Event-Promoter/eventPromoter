
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Random from './components/random';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Random/>
      <Footer/>
    </div>
  );
}

export default App;
