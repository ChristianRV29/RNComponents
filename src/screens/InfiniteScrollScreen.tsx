import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

import HeaderTitle from '~src/components/Header/Header';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>The number is: {item}</Text>;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item as any}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={() => <HeaderTitle title={'Inifite scroll'} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});

export default InfiniteScrollScreen;
