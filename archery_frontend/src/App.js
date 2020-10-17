import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import CreateEventPage from './pages/createEvent'
import EventOverviewPage from './pages/eventOverview';
import HowToPage from './pages/howTo';
import PageNotFoundPage from './pages/pageNotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'component={Home} exact />
        <Route path='/createevent' component={CreateEventPage} exact />
        <Route path='/eventoverview'component={EventOverviewPage} exact />
        <Route path='/howto'component={HowToPage} exact />
        <Route path='/' component={PageNotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
