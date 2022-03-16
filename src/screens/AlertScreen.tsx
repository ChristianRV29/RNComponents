import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

import HeaderTitle from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';

const AlertScreen = () => {
  const showAlert = () =>
    Alert.alert(
      'Alert title',
      'This would be the alert message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel pressed'),
          style: 'destructive',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Ok pressed'),
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('On dismiss'),
      }
    );

  const showPrompt = () =>
    Alert.prompt(
      'Title prompt',
      'This would be the prompt message',
      (value: any) => console.log('Value: ', value),
      'plain-text',
      'default-value', // The default value of the input
      'numeric'
    );
  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Alerts'} color={'#5856D6'} />
      <View style={styles.buttonsContainer}>
        <Button title={'Show alert'} onPress={showAlert} />
        <Button title={'Show prompt'} onPress={showPrompt} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    height: 80,
    justifyContent: 'space-between',
  },
});

export default AlertScreen;
