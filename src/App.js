import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Homedata.js"
import Footer from './Footer';
import Contact from './Contact';
import About from './About';
import usePageTracking from './usePageTracking';

import ReactGA from "react-ga";



function App() {


  return (
    <div>
      
      <Router>
        <Routes history={history}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>
      {/* <Footer/> */}
    
    </div>
  );
}

export default App;
