import React from 'react';
import { SectionList, View, Text, StyleSheet } from 'react-native';

import { brands } from '~src/data/sectionListItems';
import { globalStyles } from '~src/theme/appTheme';
import HeaderTitle from '~src/components/Header/Header';
import Separator from '~src/components/Separator/Index';

const SectionListScreen = () => {
  return (
    <View style={{ ...globalStyles.container, ...styles.sectionContainer }}>
      <SectionList
        sections={brands}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <HeaderTitle title={'Section list'} />}
        ListFooterComponent={() => (
          <View style={styles.footerContainer}>
            <HeaderTitle title={`Total brands: ${brands.length}`} />
          </View>
        )}
        renderItem={({ item }) => <Text>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <HeaderTitle title={section.brand} />
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total items: ${section.data.length}`} />
        )}
        stickySectionHeadersEnabled
        SectionSeparatorComponent={() => <Separator />}
        ItemSeparatorComponent={() => <Separator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  footerContainer: {
    marginBottom: 70,
  },
});

export default SectionListScreen;
