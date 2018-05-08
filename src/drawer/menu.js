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
          <View style={{ marginTop:10, alignItems:'center', padding:20 }}>
            <Text style={{ fontSize:25, fontWeight:'bold' }}>Bonjour, Théo</Text>
          </View>
          <List>
            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="md-briefcase" />
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
                <Icon name="md-notifications" />
              </Left>
              <Body>
                <Text>Mes missions</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="md-list-box" />
              </Left>
              <Body>
                <Text>Missions dispos</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="logo-euro" />
              </Left>
              <Body>
                <Text>Mes paiements</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="mail" />
              </Left>
              <Body>
                <Text>Mes contacts</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="md-settings" />
              </Left>
              <Body>
                <Text>Paramètres</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>

            <ListItem style={{ width:Dimensions.get('window').width-80 }} icon>
              <Left>
                <Icon name="md-power" />
              </Left>
              <Body>
                <Text>Déconnexion</Text>
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
