import React from 'react';
import HomePage from './components/homePage';
import FooterBar from './components/footer'
import Admin from './components/admin'

import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    
        
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/admin" component={Admin} />

          <FooterBar />
        </Router>
    
  );
}

export default App;
