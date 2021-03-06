import React, { useRef } from 'react';
import { View, Animated, PanResponder } from 'react-native';

import { animationStyles } from '~src/theme/appTheme';

const Animation02Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={animationStyles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), animationStyles.blueBox]}
      />
    </View>
  );
};

export default Animation02Screen;
