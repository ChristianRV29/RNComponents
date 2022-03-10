import React, { useState } from 'react';
import { Platform, StyleSheet, Switch, View } from 'react-native';

const SwitchScreen = () => {
  const [isEnable, setIsEnable] = useState<boolean>(false);

  const toggleSwitch = () => setIsEnable(!isEnable);

  return (
    <View style={styles.container}>
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
    flex: 1,
    justifyContent: 'center',
  },
});

export default SwitchScreen;
