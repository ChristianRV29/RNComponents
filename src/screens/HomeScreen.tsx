import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MenuItem from '~src/components/FlatList/MenuItem';
import { menuItems } from '~src/data/menuItems';
import { globalStyles, homeStyles } from '~src/theme/appTheme';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  const renderListHeader = (): JSX.Element => {
    return (
      <View style={{ ...homeStyles.container, marginTop: top + 15 }}>
        <Text style={homeStyles.title}>Menu options</Text>
      </View>
    );
  };

  const renderSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  return (
    <View style={globalStyles.container}>
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
