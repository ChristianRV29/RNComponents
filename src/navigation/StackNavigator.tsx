import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~src/screens/HomeScreen';
import Animation01Screen from '~src/screens/Animation01Screen';
import Animation02Screen from '~src/screens/Animation02Screen';
import SwitchScreen from '~src/screens/SwitchScreen';

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name={'HomeScreen'} component={HomeScreen} />
      <Screen name={'Animation01Screen'} component={Animation01Screen} />
      <Screen name={'Animation02Screen'} component={Animation02Screen} />
      <Screen name={'SwitchScreen'} component={SwitchScreen} />
    </Navigator>
  );
};

export default StackNavigator;
