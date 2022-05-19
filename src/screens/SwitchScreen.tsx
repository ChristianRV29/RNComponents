import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HeaderTitle from '~src/components/Header/Header';
import CustomSwitch from '~src/components/Switch/CustomSwitch';
import { ThemeContext } from '~src/context/theme/themeContext';
import { globalStyles } from '~src/theme/appTheme';

const SwitchScreen = () => {
  const { theme } = useContext(ThemeContext);

  const [state, setState] = useState({
    isActive: false,
    isAngry: false,
    isTired: true,
  });

  const onChangeSwitch = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Switches'} color={theme.colors.primary} />
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value: boolean) => onChangeSwitch(value, 'isActive')}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>isAngry</Text>
        <CustomSwitch
          isOn={state.isAngry}
          onChange={(value: boolean) => onChangeSwitch(value, 'isAngry')}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>isTired</Text>
        <CustomSwitch
          isOn={state.isTired}
          onChange={(value: boolean) => onChangeSwitch(value, 'isTired')}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>{JSON.stringify(state, null, 5)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 20,
    color: 'black',
  },
});

export default SwitchScreen;
