import React from 'react';
import { Animated, ImageStyle, StyleProp } from 'react-native';

import { useAnimation } from '~src/hooks/useAnimation';

interface AnimatedImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ uri, style }) => {
  const { opacity, fadeIn } = useAnimation();

  return (
    <Animated.Image
      source={{ uri }}
      onLoadEnd={fadeIn}
      style={{ ...(style as any), opacity }}
    />
  );
};

export default AnimatedImage;
