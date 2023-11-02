import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "react-scroll-to-top";

import logo from './logo.svg';
import './App.css';


import Header from './Navigation/Header';
import Footer from './Footer/Footer';

import Home from './Home/Home';
import About from './About/About';
import Blog from './Blog/Blog';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/about" element={<About />}/>
                <Route exact path="/services" element={<Services />}/>
                <Route exact path="/portfolio" element={<Portfolio />}/>
                <Route exact path="/blog" element={<Blog />}/>
            </Routes>
            <Footer />
        </Router>
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes> */}

    </div>
  );
}

export default App;
