import {createStackNavigator} from '@react-navigation/stack';
import {BoardGameSearchScreen, HomeScreen} from '@screens';
import React from 'react';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen.Component}
        options={HomeScreen.options}
      />
      <Stack.Screen
        name="BoardGameSearch"
        component={BoardGameSearchScreen.Component}
        options={BoardGameSearchScreen.options}
      />
    </Stack.Navigator>
  );
};
