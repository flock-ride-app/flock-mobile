import React from 'react';
import { Platform, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './features/home';
import Login from './features/login/index';

const AuthenticatedRoutes = StackNavigator({
  Home: { screen: Home },
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
