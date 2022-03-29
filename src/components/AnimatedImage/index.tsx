import React from 'react';
import { Animated } from 'react-native';

import { useAnimation } from '~src/hooks/useAnimation';

interface AnimatedImageProps {
  uri: string;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ uri }) => {
  const { opacity, fadeIn } = useAnimation();

  return (
    <Animated.Image
      source={{ uri }}
      onLoadEnd={fadeIn}
      style={{ width: '100%', height: 400, opacity }}
    />
  );
};

export default AnimatedImage;
