import React from 'react';
import { View } from 'react-native';

import HeaderTitle from '~src/components/Header/Header';
import { globalStyles } from '../theme/appTheme';

const SectionListScreen = () => {
  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Section list'} />
    </View>
  );
};

export default SectionListScreen;
