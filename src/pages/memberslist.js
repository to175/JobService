import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};
export default class MembersListScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Members list screen</Text>
      </View>
    );
  }
}
