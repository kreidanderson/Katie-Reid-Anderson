
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index"
import Landing from "./components/pages/Landing/Landing"
import About from "./components/pages/About/About"
import Portfolio from "./components/pages/Portfolio/Portfolio"
import Art from "./components/pages/Art/Art"
import Resume from "./components/pages/Resume/Resume"
import Contact from "./components/pages/Contact/Contact"

import Footer from "./components/Footer/index"

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Landing}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/art" component={Art}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
