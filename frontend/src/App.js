
import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Random from './components/random'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Random/>
    </div>
  );
}

export default App;
