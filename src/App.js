import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import About from'./components/About'
import Resume from'./components/Resume'
import Portfolio from'./components/Portfolio'
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact/>
          <Route path="/resume" component={Resume} exact />
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/contact" component={Contact} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;