import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Container, Content, Text, Button, Form, Label, Item, Input } from 'native-base';

export default class Login extends React.Component {

    render() {

        const { navigation: { navigate } } = this.props;

        return (
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Email or Username</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>

                        <Button large full
                            onPress={() => navigate('AuthenticatedRoutes')}>
                            <Text>Sign in</Text>
                        </Button>

                    </Form>
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