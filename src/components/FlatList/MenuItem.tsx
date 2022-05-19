import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { ItemProps } from '~src/@types/interfaces';
import { ThemeContext } from '~src/context/theme/themeContext';

interface MenuItemProps {
  item: ItemProps;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const { navigate } = useNavigation();

  const { theme } = useContext(ThemeContext);

  const { name, icon, screenName } = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate(screenName as any)}
    >
      <View style={styles.subContainer}>
        <Icon name={icon} color={theme.colors.primary} size={23} />
        <Text style={{ ...styles.itemLabel, color: theme.colors.text }}>
          {name}
        </Text>
      </View>
      <View>
        <Icon
          name={'arrow-forward-circle-outline'}
          color={theme.colors.primary}
          size={23}
          style={styles.iconArrow}
        />
      </View>
    </TouchableOpacity>
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
