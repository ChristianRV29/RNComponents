import { useRef } from 'react';
import { Animated, Easing } from 'react-native';

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const boxPosition = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      duration,
      useNativeDriver: true,
      toValue: 1,
    }).start();
  };

  const startMoving = (initialPosition: number, duration: number = 300) => {
    boxPosition.setValue(initialPosition);

    Animated.timing(boxPosition, {
      duration,
      useNativeDriver: true,
      toValue: 0,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      duration,
      useNativeDriver: true,
      toValue: 0,
    }).start();

    Animated.timing(boxPosition, {
      duration: 700,
      useNativeDriver: true,
      toValue: -100,
    }).start();
  };

  return {
    opacity,
    boxPosition,
    fadeIn,
    fadeOut,
    startMoving,
  };
};
