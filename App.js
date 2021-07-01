/* eslint-disable prettier/prettier */
import React from 'react';
import { Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoinsStack from 'cryptoTracker/src/components/coins/CoinsStack';
import { colors } from './src/resources/styleVariables';

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <CoinsStack/> */}
      <Tabs.Navigator
        tabBarOptions={{
          tintColor: '#fefefe',
          style: {
            backgroundColor: colors.blackPearl,
          },
        }}
      >
        <Tabs.Screen
          name="Coins"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={{ tintColor: color, width: size, height: size }}
                source={require('cryptoTracker/src/assets/images/bank.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
