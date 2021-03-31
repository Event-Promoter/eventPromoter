import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
