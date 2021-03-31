import React from 'react';


import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

import ShopPage from './pages/shop/ShopPage'

import Header from './components/header/Header'

import './App.css'
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>

    <Header/>
    <ScrollToTop/>
    <Switch>

    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    </Switch>
    </>
  );
}

export default App;
