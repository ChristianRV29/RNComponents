import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '~src/screens/HomeScreen';
import Animation01Screen from '~src/screens/Animation01Screen';
import Animation02Screen from '~src/screens/Animation02Screen';
import SwitchScreen from '~src/screens/SwitchScreen';
import AlertScreen from '~src/screens/AlertScreen';
import TextInputScreen from '~src/screens/TextInputScreen';
import PullToRefreshScreen from '~src/screens/PullToRefreshScreen';
import SectionListScreen from '~src/screens/SectionListScreen';
import ModalScreen from '~src/screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import CarouselScreen from '~src/screens/CarouselScreen';
import ThemeScreen from '~src/screens/ThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '~src/context/theme/themeContext';

const { Navigator, Screen } = createStackNavigator();
const StackNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
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
        <Screen name={'TextInputScreen'} component={TextInputScreen} />
        <Screen name={'PullToRefreshScreen'} component={PullToRefreshScreen} />
        <Screen name={'SectionListScreen'} component={SectionListScreen} />
        <Screen name={'ModalScreen'} component={ModalScreen} />
        <Screen
          name={'InfiniteScrollScreen'}
          component={InfiniteScrollScreen}
        />
        <Screen name={'CarouselScreen'} component={CarouselScreen} />
        <Screen name={'ThemeScreen'} component={ThemeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
