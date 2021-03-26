import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="body_content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        </div>
        {/*<Footer/>*/}
      </Router>
    </div>
  );
}

export default App;
