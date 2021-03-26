
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index"
import About from "./components/pages/About/About"
import Portfolio from "./components/pages/Portfolio/Portfolio"
import Resume from "./components/pages/Resume/Resume"

import Footer from "./components/Footer/index"

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/resume" component={Resume}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
