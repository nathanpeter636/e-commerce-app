import React from 'react';


import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

import './App.css'

const HatsPage = () => (
  <div>
    <h1>
      Hats
    </h1>
  </div>
)


function App() {
  return (
    <>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/hats' component={HatsPage} />
    </Switch>
    </>
  );
}

export default App;
