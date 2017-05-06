import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Container, Content, Text, Button } from 'native-base';

export default class Login extends React.Component {

    render() {

        const { navigation: { navigate } } = this.props;
        /*
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    This is Flock
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Email or Username'}
                />
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                />
                <Button
                    title="Go To Home"
                    onPress={() => navigate('AuthenticatedRoutes')}
                />
            </View>
        );
        */
        return (
            <Container>
                <Content>
                    <Text>
                        This is Flock
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder={'Email or Username'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                    />
                    <Button large full
                        onPress={() => navigate('AuthenticatedRoutes')}>
                        <Text>Home</Text>
                    </Button>
                </Content>
            </Container>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    input: {
        height: 35,
        marginTop: 10,
        backgroundColor: '#fff',
        padding: 10
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 55,
        paddingBottom: 5
    }
});