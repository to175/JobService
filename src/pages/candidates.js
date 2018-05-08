import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Props = {};
export default class CandidatesScreen extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>Candidates screen</Text>
      </View>
    );
  }
}
