import React from 'react';
import {StyleSheet, Alert, Button} from 'react-native';

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
      <View style={styles.container}>

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

export default Menu;
