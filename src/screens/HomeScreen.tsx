import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from '~src/theme/appTheme';

interface ItemProps {
  name: string;
  icon: string;
  component: string;
}

const menuItems: ItemProps[] = [
  {
    name: 'Animation 1',
    icon: 'cube-outline',
    component: 'Animation01Screen',
  },
  {
    name: 'Animation 2',
    icon: 'album-outline',
    component: 'Animation02Screen',
  },
];

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderMenuItem = (item: ItemProps): JSX.Element => {
    return (
      <View>
        <Text
          style={styles.listMenuLabel}
        >{`${item.name} - ${item.icon}`}</Text>
      </View>
    );
  };

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
        renderItem={({ item }) => renderMenuItem(item)}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default HomeScreen;
