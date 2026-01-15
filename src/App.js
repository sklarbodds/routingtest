import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ 
          backgroundColor: '#333', 
          padding: '1rem',
          marginBottom: '2rem'
        }}>
          <ul style={{ 
            listStyle: 'none', 
            display: 'flex', 
            gap: '2rem',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div style={{ padding: '0 2rem' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
