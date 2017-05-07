import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Container, Content, Text, Button, Form, Label, Item, Input, Grid, Row, H1 } from 'native-base';

const styles = require('../../utils/styles');

export default class Login extends React.Component {

    render() {

        const { navigation: { navigate } } = this.props;

        return (
            <Container style={{ backgroundColor: '#67c28b' }}>
                <Content>
                    <Form>
                        <Grid>
                            <Row style={[styles.defaultContainer, { marginTop: 40 }]}>
                                <H1 style={{ color: '#fff' }}>This is Flock.</H1>
                            </Row>
                            <Row style={styles.defaultContainer}>
                                <Text style={{ color: '#fff' }}>Flock helps match commuters, elimiate solo riders and reduce traffic.</Text>
                            </Row>
                        </Grid>
                        <Item floatingLabel>
                            <Label>Email or Username</Label>
                            <Input style={{ color: '#fff' }} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input style={{ color: '#fff' }} />
                        </Item>

                        <Button large full success
                            onPress={() => navigate('AuthenticatedRoutes')}>
                            <Text>Sign in</Text>
                        </Button>

                    </Form>
                </Content>
            </Container>
        );
    }

};
/*
const styles = StyleSheet.create({
    defaultContainer: {
        padding: 10
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
*/