import React from 'react';
import { View } from 'react-native';

import HeaderTitle from '~src/components/Header/Header';
import { globalStyles } from '../theme/appTheme';

const CarouselScreen = () => {
  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Snap carousel'} />
    </View>
  );
};

export default CarouselScreen;
