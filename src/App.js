import React from 'react';


import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

import ShopPage from './pages/shop/ShopPage'

import './App.css'



function App() {
  return (
    <>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    </Switch>
    </>
  );
}

export default App;
