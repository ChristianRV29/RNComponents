import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

import Header from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';

const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const onChangeState = (value: string, field: keyof typeof form) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <View style={globalStyles.container}>
      <Header title="TextInputs" />
      <TextInput
        style={styles.textInput}
        placeholder={'Enter your name'}
        autoCorrect={false}
        autoCapitalize={'words'}
        onChangeText={(value: string) => onChangeState(value, 'name')}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'Enter your email'}
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        onChangeText={(value: string) => onChangeState(value, 'email')}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'Enter your phone'}
        keyboardType={'numeric'}
        onChangeText={(value: string) => onChangeState(value, 'phone')}
      />
      <View style={styles.stateContainer}>
        <Text style={styles.stateText}>{JSON.stringify(form)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    opacity: 0.8,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    color: 'gray',
  },
  stateContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  stateText: {
    color: 'black',
    fontSize: 25,
  },
});

export default TextInputScreen;
