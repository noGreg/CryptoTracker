/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */

// -- Packages
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

// -- Local modules
import { colors } from '../../resources/styleVariables';

const CoinsItem = ({ item, onPress }) => {

  const getImgArrow = () => {
    if (item.percent_change_1h > 0) return require('cryptoTracker/src/assets/images/arrow_up.png');
    else return require('cryptoTracker/src/assets/images/arrow_down.png');
  };

  return (
    <Pressable onPress={() => onPress(item)} style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.symbolText}>{item.name}</Text>
        <Text style={styles.nameText}>{item.symbol}</Text>
        <Text style={styles.priceText}>{`$${item.price_usd}`}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.percentText}>
          {item.percent_change_1h}
        </Text>
        <Image style={styles.imageIcon} source={getImgArrow()} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
    borderBottomColor: colors.zircon,
    borderBottomWidth: 1
  },
  row: {
    flexDirection: 'row'
  },
  symbolText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 12
  },
  nameText: {
    color: 'white',
    fontSize: 14
  },
  percentText: {
    color: 'white',
    fontSize: 12,
    marginRight: 8
  },
  priceText: {
    color: 'white',
    fontSize: 14,
    marginLeft: 14,
    marginRight: 8
  },
  imageIcon: {
    width: 20,
    height: 20
  }
});

export default CoinsItem;
