import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites"/>
    </Stack.Navigator>
  );
}

export default FavoritesStack;