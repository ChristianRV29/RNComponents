import React from 'react';
import { View, FlatList } from 'react-native';
import Header from '~src/components/Header/Header';

import MenuItem from '~src/components/FlatList/MenuItem';
import { menuItems } from '~src/data/menuItems';
import { globalStyles, homeStyles } from '~src/theme/appTheme';

const HomeScreen = () => {
  const renderSeparator = () => {
    return <View style={homeStyles.separator} />;
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <Header title={'Menu options'} />}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

export default HomeScreen;
