import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SpacingGrid from "./components/CardGrid/cardGrid";
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
      {/* <Navbar /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <HomeScreen /> */}
            <SpacingGrid />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
