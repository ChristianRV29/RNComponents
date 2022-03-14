import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { homeStyles } from '~src/theme/appTheme';

interface HeaderProps {
  title: string;
  color?: string;
}

const Header: React.FC<HeaderProps> = props => {
  const { title, color = 'black' } = props;
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ ...homeStyles.container, marginTop: top + 15 }}>
      <Text style={{ ...homeStyles.title, color }}>{title}</Text>
    </View>
  );
};

export default Header;
