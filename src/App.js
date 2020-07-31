import React from 'react';
import './App.css';
import HomePage from './components/pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUP from './components/pages/signinandsignup/sign-in-and-sign-up.component';
import {auth , createUserProfileDocument} from './Firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth =auth.onAuthStateChanged(async userAuth=> {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
        console.log(this.state);
      }
      this.setState({currentUser:userAuth});
    });  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return(
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path = '/shop' component = {ShopPage} />
          <Route path = '/signin' component = {SignInAndSignUP} />
        </Switch>
    </div>
  );
  }
}

export default App;
