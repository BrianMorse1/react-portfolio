import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <Router>
      <div>
        <header>
          <h1>Brian Morse</h1>
          <nav>
            <ul>
              <li>
              <Link to="/" onClick={() => setActiveLink('home')}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setActiveLink('about')}>About</Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setActiveLink('projects')}>Projects</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setActiveLink('contact')}>Contact</Link>
              </li>
              <li>
                <Link to="/resume" onClick={() => setActiveLink('resume')}>Resume</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className='display-area'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/components/About' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
            <Route path='/resume' component={Resume} />
          </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;