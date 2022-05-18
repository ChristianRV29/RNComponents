import 'react-native-gesture-handler';

import React from 'react';
import { LogBox } from 'react-native';

import StackNavigator from '~src/navigation/StackNavigator';
import { ThemeProvider } from '~src/context/theme/themeContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  );
};

const AppState = ({ children }: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
