import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~src/screens/HomeScreen';
import Animation01Screen from '~src/screens/Animation01Screen';
import Animation02Screen from '~src/screens/Animation02Screen';
import SwitchScreen from '~src/screens/SwitchScreen';
import AlertScreen from '~src/screens/AlertScreen';

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
      <Screen name={'AlertScreen'} component={AlertScreen} />
    </Navigator>
  );
};

export default StackNavigator;
