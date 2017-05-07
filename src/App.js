import React from 'react';
import { Platform, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './features/home';
import Messenger from './features/messenger';
import Login from './features/login';

const AuthenticatedRoutes = StackNavigator({
  Home: { screen: Home },
  Messenger: { screen: Messenger }
});

const ApplicationRoutes = StackNavigator({
  Login: { screen: Login },
  AuthenticatedRoutes: { screen: AuthenticatedRoutes }
}, {
    initialRouteName: 'Login',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    navigationOptions: {
      header: null
    }
  });


export default class App extends React.Component {
  render() {
    return (
      <ApplicationRoutes />
    );
  }
}
