import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Login extends React.Component {

    render() {

        const { navigation: { navigate } } = this.props;

        return (
            <View>
                <Text>
                    Login here
                </Text>
                <Button
                    title="Go To Home"
                    onPress={() => navigate('AuthenticatedRoutes')}
                />
            </View>
        );
    }

};