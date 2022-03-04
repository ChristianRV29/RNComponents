import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ItemProps } from '~src/@types/interfaces';
import MenuItem from '~src/components/FlatList/MenuItem';
import { styles } from '~src/theme/appTheme';

const menuItems: ItemProps[] = [
  {
    name: 'Animation 1',
    icon: 'cube-outline',
    screenName: 'Animation01Screen',
  },
  {
    name: 'Animation 2',
    icon: 'albums-outline',
    screenName: 'Animation02Screen',
  },
];

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderListHeader = (): JSX.Element => {
    return (
      <View style={{ marginTop: top + 15, marginBottom: 15 }}>
        <Text style={styles.listTitle}>Menu options</Text>
      </View>
    );
  };

  const renderSeparator = () => {
    return (
      <View style={{ borderBottomWidth: 1, opacity: 0.4, marginVertical: 8 }} />
    );
  };

  return (
    <View style={styles.home}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default HomeScreen;
