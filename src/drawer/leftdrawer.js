import React from 'react';
import {StyleSheet, Alert, Button} from 'react-native';

import { Container, Content, List, ListItem, Header, Icon, Item, Input, View, Left, Right, Body, Title, Subtitle, Card, CardItem, Thumbnail, Text } from 'native-base';

import Login from './login';
import Menu from './menu';

type Props = {};
class LeftDrawer extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {email: '', pass: '', isLoggedIn: true};
    //si on ouvre le drawer
    //this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  renderMainElement = () => {
    if(this.state.isLoggedIn){
      return <Menu navigator={this.props.navigator} />;
    }
    else{
      return <Login navigator={this.props.navigator} />;
    }
  }

  onPressConnexion = () => {
    this.toggleDrawer();
    Alert.alert('coucou', 'oui');
  };

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderMainElement()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16
  }
});

export default LeftDrawer;
