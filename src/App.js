import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from'./components/About'
import Experience from'./components/Experience'
import Portfolio from'./components/Portfolio'
import ContactList from './components/ContactList'
import ToDoList from './components/ToDoList'
import Contact from './components/Contact';
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={About} exact/>
          <Route path="/experience" component={Experience} exact />
          <Route path="/portfolio" component={Portfolio} exact/>
          <Route path="/contact" component={Contact} exact/>
          <Route path="/portfolio/contact-list" component={ContactList} exact/>
          <Route path="/portfolio/todo-list" component={ToDoList} exact/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;