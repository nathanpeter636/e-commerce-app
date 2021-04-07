import React from 'react';


import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

import ShopPage from './pages/shop/ShopPage'

import Header from './components/header/Header'

import './App.css'
import ScrollToTop from './components/ScrollToTop';

import SignInSignOutPage from './pages/sign-in-sign-out/SignInSignOutPage'

import { auth } from './firebase/firebase.utils' 



class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {

    this.setState({currentUser: user});

    console.log(user)
  })
}

componentWillUnmount() {
  this.unsubscribeFromAuth()
}

  render () {
  return (
    <>

    <Header currentUser={this.state.currentUser}/>
    <ScrollToTop/>
    <Switch>

    <Route exact path='/' component={Homepage} />
    <Route path='/shop' component={ShopPage} />
    <Route path='/signin' component={SignInSignOutPage} />
    </Switch>
    </>
  );
  }
}

export default App;
