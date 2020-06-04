import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const Hats=()=>(
  <div>
    HATS PAGE
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path = '/hats' component = {Hats} />
      </Switch>
    </div>
  );
}

export default App;
