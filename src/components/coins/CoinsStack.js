/* eslint-disable prettier/prettier */

// -- Packages
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// -- Local modules
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from '../coinDetail/CoinDetailScreen';
import { colors } from 'cryptoTracker/src/resources/styleVariables';

const Stack = createStackNavigator();

const CoinsStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.blackPearl,
          shadowColor: colors.blackPearl,
        },
        headerTintColor: colors.white,
      }}
    >
      <Stack.Screen name="Coins" component={CoinsScreen} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
