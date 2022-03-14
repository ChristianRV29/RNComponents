import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, View } from 'react-native';
import HeaderTitle from '~src/components/Header/Header';

const SwitchScreen = () => {
  const [isEnable, setIsEnable] = useState<boolean>(false);

  const toggleSwitch = () => setIsEnable(!isEnable);

  return (
    <View style={styles.container}>
      <HeaderTitle title={'Switches'} />
      <Switch
        trackColor={{ false: '#D9D9DB', true: '#9e9eda' }}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        onValueChange={toggleSwitch}
        value={isEnable}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default SwitchScreen;
