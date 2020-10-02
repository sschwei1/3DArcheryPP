import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import {Breadcrumbs, Button} from '@material-ui/core';
import TestPage from './TestPage';
import CurrentPathNav from './Components/CurrentPathNav/CurrentPathNav';

const App :React.FC = () => {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/about/me">abc</Link>
          </li>
        </ul>

        <CurrentPathNav path="" />

        <Switch>
          <Route exact path="/">
            <TestPage text="home" />
          </Route>
          <Route exact path="/about">
            <TestPage text="about" />
          </Route>
          <Route exact path="/about/me">
            <TestPage text="users" />
          </Route>
          <Route path="/">
            <TestPage text="page not found uwu" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
