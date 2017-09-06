import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

class AppRouter extends Component {
  render () {
    return (
      <Router sceneStyle={{ paddingTop: 25 }}>
        <Scene key="root">
          <Scene
            key="login"
            title="Login"
            component={LoginForm}
            initial
          />
        </Scene>
      </Router>
    )
  }
}

export default AppRouter;
