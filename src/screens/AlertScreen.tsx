import React from 'react';
import { Alert, Button, View } from 'react-native';

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

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Alerts'} color={'#5856D6'} />
      <Button title={'Show alert'} onPress={showAlert} />
    </View>
  );
};

export default AlertScreen;
