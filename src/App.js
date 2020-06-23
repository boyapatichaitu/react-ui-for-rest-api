import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import { useSelector, connect } from 'react-redux';

import LoginOrSignUpLayout from './Components/LoginOrSignupLayout/LoginOrSignUpLayout';
import Users from './Components/Users/Users';

import ProtectedRoute from './Routes/ProtectedRoute';
import UnProtectedRoute from './Routes/UnProtectedRoute';

import './App.css';
import * as actions from './redux/actions/actions';
import Alert from './Components/Alert/Alert';

function App(props) {
  const reduxState = useSelector(state => {
    return {
      isLoggedIn: state.isLoggedIn,
      message: state.actionMessage
    }
  })

  if(reduxState.message){
    console.log(reduxState.message);
  }
  if (reduxState.isLoggedIn)
    props.logoutTimer();

  return (
      <div className="App component-body container-fluid">
        <BrowserRouter>
          <Switch>
            <UnProtectedRoute path="/login" exact={true} component={() => <LoginOrSignUpLayout isLoginPage={true} />} />
            <UnProtectedRoute path="/sign-up" exact={true} component={() => <LoginOrSignUpLayout isLoginPage={false} />} />
            <ProtectedRoute exact={true} path="/" component={() => <Users />} />
          </Switch>
        </BrowserRouter>
        <Alert message={reduxState.message}/>
      </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logoutTimer: () => dispatch(actions.logoutTimer())
  }
}

export default connect(null, mapDispatchToProps)(App);
