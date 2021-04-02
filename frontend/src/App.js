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
import SignIn from "./screens/Signin";
import SignUp from "./screens/Signup";
import SignUpOrg from "./screens/SignUpOrg";
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
          <Route exact path="/SignUpOrg" component={SignUpOrg} />

          <Route path="/:title" component={(Navbar, EventScreen, Footer)} />
          <Route path="/main-event" component={(Navbar, MainEvent, Footer)} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
