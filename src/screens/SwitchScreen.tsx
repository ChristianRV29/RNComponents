import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderTitle from '~src/components/Header/Header';
import CustomSwitch from '~src/components/Switch/CustomSwitch';

const SwitchScreen = () => {
  return (
    <View style={styles.container}>
      <HeaderTitle title={'Switches'} />
      <CustomSwitch isOn={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default SwitchScreen;
