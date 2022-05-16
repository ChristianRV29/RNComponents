import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import Header from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';

const ThemeScreen = () => {
  const { colors } = useTheme();
  return (
    <View style={globalStyles.container}>
      <Header title={'Theme handler'} color={colors.text} />
    </View>
  );
};

export default ThemeScreen;
