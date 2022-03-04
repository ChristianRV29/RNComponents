import React from 'react';
import { View, Animated } from 'react-native';

import { animationStyles } from '~src/theme/appTheme';

const Animation02Screen = () => {
  return (
    <View style={animationStyles.container}>
      <View style={animationStyles.purpleRed} />
    </View>
  );
};

export default Animation02Screen;
