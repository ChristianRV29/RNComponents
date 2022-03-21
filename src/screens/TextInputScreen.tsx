import React from 'react';
import { View } from 'react-native';

import Header from '~src/components/Header/Header';
import { globalStyles } from '../theme/appTheme';

const TextInput = () => {
  return (
    <View style={globalStyles.container}>
      <Header title="Text input" />
    </View>
  );
};

export default TextInput;
