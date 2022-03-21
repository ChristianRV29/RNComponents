import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Header from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';

const TextInputScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Header title="TextInputs" />
      <TextInput style={styles.textInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    opacity: 0.8,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    color: 'gray',
  },
});

export default TextInputScreen;
