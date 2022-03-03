import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home screen</Text>
      <Icon name={'star-outline'} size={50} color={'green'} />
      {/**<FontAwesomeIcon icon="fa-solid fa-stars" /> */}
    </View>
  );
};

export default HomeScreen;
