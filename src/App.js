import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className='App'>
        <header>Brian Morse</header>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/resume' element={<Resume />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;