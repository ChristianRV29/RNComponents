import 'react-native-gesture-handler';

import React from 'react';
import { LogBox } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  Theme,
} from '@react-navigation/native';

import StackNavigator from '~src/navigation/StackNavigator';
import { ThemeProvider } from '~src/context/theme/themeContext';

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
    <AppState>
      <NavigationContainer theme={customTheme}>
        <StackNavigator />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
