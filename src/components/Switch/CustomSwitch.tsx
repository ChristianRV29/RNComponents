import React, { useState } from 'react';
import { Platform, Switch } from 'react-native';

interface SwitchProps {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

const CustomSwitch: React.FC<SwitchProps> = ({ isOn, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: '#9e9eda' }}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
