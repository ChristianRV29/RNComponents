import React, { useContext } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import Header from '~src/components/Header/Header';
import CustomSwith from '~src/components/Switch/CustomSwitch';
import { useForm } from '~src/hooks/useForm';
import { globalStyles } from '~src/theme/appTheme';
import { ThemeContext } from '../context/theme/themeContext';

const TextInputScreen = () => {
  const { theme } = useContext(ThemeContext);

  const { form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isRegister: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.container}>
          <Header title="TextInputs" />
          <TextInput
            style={{
              ...styles.textInput,
              color: theme.colors.text,
              backgroundColor: theme.colors.card,
              borderColor: theme.colors.border,
            }}
            placeholder={'Enter your name'}
            autoCorrect={false}
            autoCapitalize={'words'}
            onChangeText={(value: string) => onChange(value, 'name')}
          />
          <TextInput
            style={{
              ...styles.textInput,
              color: theme.colors.text,
              backgroundColor: theme.colors.card,
            }}
            placeholder={'Enter your email'}
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={(value: string) => onChange(value, 'email')}
          />
          <TextInput
            style={{
              ...styles.textInput,
              color: theme.colors.text,
              backgroundColor: theme.colors.card,
            }}
            placeholder={'Enter your phone'}
            keyboardType={'numeric'}
            onChangeText={(value: string) => onChange(value, 'phone')}
          />
          <View style={styles.switchContainer}>
            <Text style={{ ...styles.switchLabel, color: theme.colors.text }}>
              Register
            </Text>
            <CustomSwith
              isOn={form.isRegister}
              onChange={(value: boolean) => onChange(value, 'isRegister')}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={{ ...styles.stateText, color: theme.colors.text }}>
              {JSON.stringify(form)}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    height: 50,
    opacity: 0.9,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    fontSize: 20,
  },
  stateContainer: {
    marginVertical: 20,
  },
  textContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    height: 150,
  },
  stateText: {
    fontSize: 25,
  },
  switchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'space-between',
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 20,
  },
});

export default TextInputScreen;
