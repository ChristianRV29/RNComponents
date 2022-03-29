import React, { useState } from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';
import AnimatedImage from '~src/components/AnimatedImage';

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
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return <AnimatedImage uri={`https://picsum.photos/id/${item}/500/400`} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item as any}
        renderItem={({ item }) => renderItem(item)}
        ListHeaderComponent={() => <HeaderTitle title={'Inifite scroll'} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<ActivityIndicator size={25} color={'5856D6'} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InfiniteScrollScreen;
