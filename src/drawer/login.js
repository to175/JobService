import React from 'react';
import {StyleSheet, Alert, Button} from 'react-native';

import { Container, Content, List, ListItem, Header, Icon, Item, Input, View, Left, Right, Body, Title, Subtitle, Card, CardItem, Thumbnail, Text } from 'native-base';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: '', pass: ''};
  }

  onPressConnexion = () => {
    this.toggleDrawer();

    this.props.navigator.push({
      screen: 'src.ApplicationsScreen',
      title: 'Candidatures'
    });
  };

  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left'
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          <Item>
            <Icon active name='at' />
            <Input onChangeText={(email) => this.setState({email})} placeholder='Email efrei'/>
          </Item>
          <Item>
            <Icon active name='lock' />
            <Input onChangeText={(pass) => this.setState({pass})} placeholder='Mot de passe'/>
          </Item>
          <Button
            onPress={this.onPressConnexion}
            title="Connexion élève"/>
        </View>
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

export default Login;
