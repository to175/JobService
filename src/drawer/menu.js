import React from 'react';
import {StyleSheet, Alert, Button, Dimensions} from 'react-native';

import { Container, Content, List, ListItem, Header, Icon, Item, Input, View, Left, Right, Body, Title, Subtitle, Card, CardItem, Thumbnail, Text } from 'native-base';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pass: ''};
  }

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>Candidature</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>Missions  </Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default Menu;
