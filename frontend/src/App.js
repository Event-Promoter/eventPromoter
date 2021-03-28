import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Random from "./components/random";
import Footer from "./components/Footer";
import ImgMediaCard from "./components/Card";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Random />
      <ImgMediaCard />
      <Footer />
    </div>
  );
}

export default App;
