import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { homeStyles } from '~src/theme/appTheme';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { title } = props;
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...homeStyles.container, marginTop: top + 15 }}>
      <Text style={homeStyles.title}>{title}</Text>
    </View>
  );
};

export default Header;
