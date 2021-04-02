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
import EventScreen from "./screens/EventScreen";
import MainEvent from "./components/main-event/MainEvent";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path='/all'>
            <SpacingGrid/>
          </Route>
          <Route path='/event' component={EventScreen}/>
          <Route path='/main-event' component={MainEvent}/>
        </Switch>
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
