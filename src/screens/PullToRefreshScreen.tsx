/* eslint-disable react-native/no-inline-styles */
import React, { useContext, useState } from 'react';
import {
  ScrollView,
  RefreshControl,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { globalStyles } from '~src/theme/appTheme';
import HeaderTitle from '~src/components/Header/Header';
import { ThemeContext } from '~src/context/theme/themeContext';

const PullToRefreshScreen = () => {
  const { theme } = useContext(ThemeContext);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setIsRefreshing(true);

    setTimeout(() => {
      setIsRefreshing(false);
      setData('Hello world!');
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={theme.colors.primary}
          colors={['blue', 'red', 'orange']}
          style={{ backgroundColor: theme.colors.notification }}
          tintColor={'white'}
          title={'Refreshing...'}
          titleColor={'white'}
        />
      }
      style={globalStyles.container}
    >
      <HeaderTitle title={'Pull to refresh'} color={theme.colors.primary} />

      {data && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{data}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageText: {
    fontSize: 20,
    color: 'black',
  },
});

export default PullToRefreshScreen;
