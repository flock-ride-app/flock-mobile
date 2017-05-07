import React from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

export default class Messenger extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={require('../../../assets/avatar.jpg')} />
                        </Left>
                        <Body>
                            <Text>Lord Maximus</Text>
                            <Text note>
                                Some information about all the things we do
                            </Text>
                        </Body>
                    </ListItem>
                    <ListItem avatar>
                        <Right>
                            <Thumbnail source={require('../../../assets/avatar.jpg')} />
                        </Right>
                        <Body>
                            <Text>Martha Lucas</Text>
                            <Text note>
                                Something posted by Martha
                            </Text>
                        </Body>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}