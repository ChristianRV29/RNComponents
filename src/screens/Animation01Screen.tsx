import React, { useRef } from 'react';
import { Animated, Text, View, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { animationStyles } from '~src/theme/appTheme';

const Animation01Screen = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const boxPosition = useRef(new Animated.Value(-100)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      duration: 300,
      useNativeDriver: true,
      toValue: 1,
    }).start();

    Animated.timing(boxPosition, {
      duration: 700,
      useNativeDriver: true,
      toValue: 0,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      duration: 300,
      useNativeDriver: true,
      toValue: 0,
    }).start();

    Animated.timing(boxPosition, {
      duration: 700,
      useNativeDriver: true,
      toValue: -100,
    }).start();
  };

  return (
    <View style={animationStyles.container}>
      <Animated.View
        style={{
          ...animationStyles.purpleBox,
          opacity,
          transform: [
            {
              translateY: boxPosition,
            },
          ],
        }}
      />
      <View style={animationStyles.buttonsContainer}>
        <TouchableOpacity onPress={fadeIn} style={animationStyles.button}>
          <Text style={animationStyles.buttonLabel}>Fade in</Text>
          <Icon name={'enter-outline'} size={30} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={fadeOut} style={animationStyles.button}>
          <Text style={animationStyles.buttonLabel}>Fade out</Text>
          <Icon name={'log-out-outline'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Animation01Screen;