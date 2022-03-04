import React, { useRef } from 'react';
import { Animated, View } from 'react-native';

import { animationStyles } from '~src/theme/appTheme';

const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;

  return (
    <View style={animationStyles.container}>
      <Animated.View style={{ ...animationStyles.purpleBox, opacity }} />
    </View>
  );
};

export default Animation01Screen;
