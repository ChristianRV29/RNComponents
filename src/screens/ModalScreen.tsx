import React, { useState } from 'react';
import { Button, Modal, View, StyleSheet, Text } from 'react-native';

import { default as HeaderTitle } from '~src/components/Header/Header';
import { globalStyles } from '~src/theme/appTheme';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <View style={globalStyles.container}>
      <HeaderTitle title={'Modal'} />
      <View>
        <Button title={'Show modal'} onPress={() => setIsVisible(true)} />
      </View>
      <Modal animationType={'fade'} transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.contenModalContainer}>
            <Text style={styles.textModal}>Modal content</Text>
            <Button title={'Close modal'} onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  contenModalContainer: {
    justifyContent: 'flex-start',
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  textModal: {
    fontSize: 30,
    color: '#E6ECFF',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export default ModalScreen;
