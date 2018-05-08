/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { Form, Label, Input, Textarea, Container, Content, List, ListItem, Header, Button, Icon, Item, View, Left, Right, Body, Title, Subtitle, Card, CardItem, Thumbnail, Text } from 'native-base';

type Props = {};
export default class HomeScreen extends Component<Props> {
  constructor(props){
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'menu') { // this is the same id field from the static navigatorButtons definition
            this.props.navigator.toggleDrawer({
              side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
              animated: true, // does the toggle have transition animation or does it happen immediately (optional)
            });
      }
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <ImageBackground style={ [styles.bg, {alignItems:'center', justifyContent:'center'}] } source={ require('./images/slide.png') }><Text style={{color:'white', fontSize:25}}>Bienvenue chez EFFOR</Text></ImageBackground>
          <View style={{ flexDirection:'row' }}>
            <Card style={{flex: 1}}>
            <CardItem>
              <Body style={{ alignItems:'center' }}>
                <Thumbnail square source={{uri: 'https://cdn1.iconfinder.com/data/icons/computer-hardware-cute-style-vol-1/52/computer__desktop__monitor__technology__screen__television__display-128.png'}} />
                <Text>Formations</Text>
              </Body>
            </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Effor est un centre de formation agréé, habilité à dispenser des formations dans le domaine informatique.
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="eye" />
                    <Text>Détails</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
            <Card style={{flex: 1}}>
              <CardItem>
                <Body style={{ alignItems:'center' }}>
                  <Thumbnail square source={{uri: 'https://cdn1.iconfinder.com/data/icons/computer-hardware-cute-style-vol-1/52/cable__connector__usb__tech__plug__connection__device-128.png'}} />
                  <Text>Autres prestations</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Nous proposons des prestations techniques telles que de la migration de données ou du déploiement.
                  </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent textStyle={{color: '#87838B'}}>
                    <Icon name="eye" />
                    <Text>Détails</Text>
                  </Button>
                </Left>
              </CardItem>
            </Card>
          </View>
          <Card transparent>
            <CardItem header>
              <Text><Icon active name='mail' /> Contactez nous</Text>
            </CardItem>
            <CardItem>
              <Content>
                <Form>
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Objet</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Message</Label>
                    <Input
                      multiLine={true}
                      numberOfLines={5}
                      style={{ height:150 }}
                     />
                  </Item>
                </Form>
              </Content>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 23,
    textAlign: 'center',
    margin: 30,
    color: 'white'
  },
  bg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/4
  },
  button: {
    flex: 1,
    width: Dimensions.get('window').width - 85,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  btext: {
    fontSize: 25
  }
});
