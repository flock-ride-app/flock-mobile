import React from 'react';
import { Platform, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Login = ({ navigation: { navigate } }) => (
  <View>
    <Text>
      Login
    </Text>

    <Button
      title="Go To Home"
      onPress={ () => navigate('AuthenticatedRoutes') }
    />
  </View>
);

const Home = () => (
  <View>
    <Text>
      Home
    </Text>
  </View>
);

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
