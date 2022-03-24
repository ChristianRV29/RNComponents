import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';

import { brands } from '~src/data/sectionListItems';
import { globalStyles } from '../theme/appTheme';
import HeaderTitle from '~src/components/Header/Header';

const SectionListScreen = () => {
  return (
    <View style={{ ...globalStyles.container, ...styles.sectionContainer }}>
      <SectionList
        sections={brands}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title={'Section list'} />}
        ListFooterComponent={() => (
          <HeaderTitle title={`Total brands: ${brands.length}`} />
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <HeaderTitle title={section.brand} />
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total items: ${section.data.length}`} />
        )}
        stickySectionHeadersEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
});

export default SectionListScreen;
