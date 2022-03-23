import React from 'react';
import { View } from 'react-native';

import { globalStyles } from '../theme/appTheme';
import HeaderTitle from '~src/components/Header/Header';

const PullToRefreshScreen = () => {
  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Pull to refresh'} />
    </View>
  );
};

export default PullToRefreshScreen;
