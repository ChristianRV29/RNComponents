import React from 'react';
import { View, FlatList } from 'react-native';

import Header from '~src/components/Header/Header';
import MenuItem from '~src/components/FlatList/MenuItem';
import { menuItems } from '~src/data/menuItems';
import { globalStyles } from '~src/theme/appTheme';
import Separator from '~src/components/Separator/Index';

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => <MenuItem item={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => (
          <Header title={'Menu options'} color={'#5856D6'} />
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </View>
  );
};

export default HomeScreen;
