import React from 'react';


import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

import ShopPage from './pages/shop/ShopPage'

import Header from './components/header/Header'

import './App.css'
import ScrollToTop from './components/ScrollToTop';

import SignInSignOutPage from './pages/sign-in-sign-out/SignInSignOutPage'



function App() {
  return (
    <>

    <Header/>
    <ScrollToTop/>
    <Switch>

    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignInSignOutPage} />
    </Switch>
    </>
  );
}

export default App;
