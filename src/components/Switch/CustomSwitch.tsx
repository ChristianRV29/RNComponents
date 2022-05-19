import React, { useContext, useState } from 'react';
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '~src/context/theme/themeContext';

interface SwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<SwitchProps> = ({ isOn, onChange }) => {
  const { theme } = useContext(ThemeContext);

  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
      thumbColor={Platform.OS === 'android' ? theme.colors.primary : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
