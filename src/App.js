import React from 'react';


import { Switch, Route } from 'react-router-dom'

import Homepage from './pages/Homepage'

import ShopPage from './pages/shop/ShopPage'

import Header from './components/header/Header'

import './App.css'
import ScrollToTop from './components/ScrollToTop';

import SignInSignOutPage from './pages/sign-in-sign-out/SignInSignOutPage'

import { auth, createUserProfileDocument } from './firebase/firebase.utils' 



class App extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       currentUser: null
    }
  }

  unsubscribeFromAuth = null
  
componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth)


      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        
        }, () => {
          console.log(this.state)
        })
      });

    }

    this.setState({currentUser: userAuth })
    
  });
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
