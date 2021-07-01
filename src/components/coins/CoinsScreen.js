/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

// -- Packages
import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, FlatList } from 'react-native';

// -- Components
import CoinsItem from './CoinsItem';
import Search from './Search';

// -- Local modules
import Http from '../../libs/http';
import { colors } from 'cryptoTracker/src/resources/styleVariables';

class CoinsScreen extends Component {

  state = {
    coins: [],
    allCoins: [],
    loading: false,
  }

  componentDidMount = () => {
    this.getCoins();
  }

  getCoins = async () => {
    this.setState({ loading: true });

    const coins = await Http.instance.get('https://api.coinlore.net/api/tickers');

    this.setState({
      coins: coins.data,
      allCoins: coins.data,
      loading: false,
    });

  }

  handlePress = (coin) => {
    this.props.navigation.navigate('CoinDetail', { coin });
  }

  handleSearch = (query) => {
    const { allCoins } = this.state;

    const coinsFiltered = allCoins.filter(coin => {
      return coin.name.toLowerCase().includes(query.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(query.toLowerCase());
    });

    this.setState({ coins: coinsFiltered });
  }

  render() {

    const { coins } = this.state;

    return (
      <View style={styles.container}>
        <Search onChange={this.handleSearch} />
        {
          this.state.loading
            ? <ActivityIndicator color="white" size="large" style={styles.loader}/>
            : (
              <FlatList
                data={coins}
                renderItem={({ item }) => (
                  <CoinsItem item={item} onPress={this.handlePress}/>
                )}
              >
              </FlatList>
            )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.charade,
  },
  titleText: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
    margin: 16,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  loader: {
    marginTop: 60,
  },
});

export default CoinsScreen;
