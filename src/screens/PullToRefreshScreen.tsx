import React, { useState } from 'react';
import { ScrollView, RefreshControl } from 'react-native';

import { globalStyles } from '../theme/appTheme';
import HeaderTitle from '~src/components/Header/Header';

const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);

      console.log('It refreshed');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
      }
      style={globalStyles.container}
    >
      <HeaderTitle title={'Pull to refresh'} />
    </ScrollView>
  );
};

export default PullToRefreshScreen;
