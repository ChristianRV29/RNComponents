import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ItemProps } from '~src/@types/interfaces';

interface MenuItemProps {
  item: ItemProps;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { name, icon } = item;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Icon name={icon} color={'gray'} size={23} />
        <Text style={styles.itemLabel}>{name}</Text>
      </View>
      <View>
        <Icon
          name={'arrow-forward-circle-outline'}
          color={'gray'}
          size={23}
          style={styles.iconArrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemLabel: {
    marginHorizontal: 5,
    fontSize: 19,
    color: 'gray',
  },
  iconArrow: {
    paddingRight: 0,
  },
});

export default MenuItem;
