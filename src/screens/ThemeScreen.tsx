import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';
import { ThemeContext } from '~src/context/theme/themeContext';

const ThemeScreen = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ThemeContext);

  return (
    <View style={globalStyles.container}>
      <Header title="Theme handler" color={theme.colors.text} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.themeButton,
            backgroundColor: theme.colors.notification,
          }}
          onPress={setLightTheme}
        >
          <Text style={{ ...styles.textButton, color: theme.colors.text }}>
            Light
          </Text>
        </TouchableOpacity>
        <Icon
          name="arrow-back-circle-outline"
          color={theme.colors.primary}
          size={30}
        />
        <Icon
          name="arrow-forward-circle-outline"
          color={theme.colors.primary}
          size={30}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.themeButton,
            backgroundColor: theme.colors.notification,
          }}
          onPress={setDarkTheme}
        >
          <Text style={{ ...styles.textButton, color: theme.colors.text }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  themeButton: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    borderRadius: 20,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 22,
  },
  buttonsContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 'auto',
  },
});

export default ThemeScreen;
