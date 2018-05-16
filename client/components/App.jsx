import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//components
import Menu   from "./Menu.jsx";
import Footer from "./Footer.jsx";
import Home   from "./Home.jsx";
import Trip   from "./Trip.jsx";
import Login  from "./Login.jsx";
import Signup from "./Signup.jsx";

//styles
import "../css/App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <Router>
          <div>
            <Route exact path = "/"        component = { Home }   />
            <Route       path = "/trips"   component = { Trip }   />
            <Route       path = "/log-in"  component = { Login }  />
            <Route       path = "/sign-up" component = { Signup } />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
