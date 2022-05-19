import React, { useContext } from 'react';
import { Animated, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~src/context/theme/themeContext';
import { useAnimation } from '~src/hooks/useAnimation';

import { animationStyles } from '~src/theme/appTheme';

const Animation01Screen = () => {
  const { theme } = useContext(ThemeContext);

  const { boxPosition, fadeIn, fadeOut, opacity, startMoving } = useAnimation();
  return (
    <View style={animationStyles.container}>
      <Animated.View
        style={{
          ...animationStyles.purpleBox,
          opacity,
          backgroundColor: theme.colors.primary,
          transform: [
            {
              translateY: boxPosition,
            },
          ],
        }}
      />
      <View style={animationStyles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            fadeIn();
            startMoving(-100, 700);
          }}
          style={{
            ...animationStyles.button,
            backgroundColor: theme.colors.notification,
          }}
        >
          <Text style={animationStyles.buttonLabel}>Fade in</Text>
          <Icon name={'enter-outline'} size={30} color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => fadeOut()}
          style={{
            ...animationStyles.button,
            backgroundColor: theme.colors.border,
          }}
        >
          <Text style={animationStyles.buttonLabel}>Fade out</Text>
          <Icon name={'log-out-outline'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Animation01Screen;
