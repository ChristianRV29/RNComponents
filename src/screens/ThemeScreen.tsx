import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import Header from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';
import { ThemeContext } from '~src/context/theme/themeContext';

const ThemeScreen = () => {
  const { colors } = useTheme();

  const { setDarkTheme } = useContext(ThemeContext);

  return (
    <View style={globalStyles.container}>
      <Header title="Theme handler" color={colors.text} />
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.themeButton}
        onPress={setDarkTheme}
      >
        <Text style={{ ...styles.textButton, color: colors.text }}>
          Dark/Light
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  themeButton: {
    height: 150,
    width: 150,
    backgroundColor: '#5856D6',
    justifyContent: 'center',
    borderRadius: 20,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 22,
  },
});

export default ThemeScreen;
