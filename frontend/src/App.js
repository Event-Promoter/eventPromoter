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
import SignIn from "./screens/Signin";
import SignUp from "./screens/Signup";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomeScreen />
            <Footer />
          </Route>
          <Route path="/all">
            <Navbar />
            <SpacingGrid />
            <Footer />
          </Route>
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/SignUp" component={SignUp} />

          <Route path="/:title" component={(Navbar, EventScreen, Footer)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
