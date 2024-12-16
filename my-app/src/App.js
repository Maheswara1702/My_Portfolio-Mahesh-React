import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Projects/Project";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/project" element={<Project/>}/>
          </Routes>
        </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
