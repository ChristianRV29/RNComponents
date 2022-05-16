import 'react-native-gesture-handler';

import React from 'react';
import { LogBox } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  Theme,
} from '@react-navigation/native';

import StackNavigator from '~src/navigation/StackNavigator';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
