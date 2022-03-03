import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~src/screens/HomeScreen';

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={'Home'} component={HomeScreen} />
    </Navigator>
  );
};

export default StackNavigator;
