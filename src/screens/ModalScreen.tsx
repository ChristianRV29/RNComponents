import React, { useState } from 'react';
import { Button, Modal, View, StyleSheet } from 'react-native';

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
        <View style={styles.contentModalContainer} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default ModalScreen;
