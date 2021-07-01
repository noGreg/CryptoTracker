/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { TextInput, Platform, View, StyleSheet } from 'react-native';

import { colors } from 'cryptoTracker/src/resources/styleVariables';

class CoinSearch extends Component {

  state = {
    query: '',
  }

  handleText = (query) => {
    this.setState({ query });
    this.props.onChange && this.props.onChange(query);
  }

  render() {

    const { query } = this.state;

    return (
      <View>
        <TextInput
          style={[
            styles.textInput,
            Platform.OS === 'ios' ?  styles.textInputIOS : styles.textInputAndroid,
          ]}
          onChangeText={this.handleText}
          value={query}
          placeholder="Search coin"
          placeholderTextColor="white"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: colors.charade,
    paddingLeft: 16,
    color: 'white',
  },
  textInputAndroid: {
    borderBottomWidth: 2,
    borderBottomColor: colors.zircon,
  },
  textInputIOS: {
    margin: 8,
    borderRadius: 8,
  },
});

export default CoinSearch;
