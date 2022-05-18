import { Theme } from '@react-navigation/native';
import React, { createContext } from 'react';

interface ThemeContextProps {
  theme: any;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const theme: Theme = {
    dark: false,
    colors: {
      primary: '',
      background: '',
      card: '',
      text: '',
      border: '',
      notification: '',
    },
  };

  const setDarkTheme = () => {
    console.log('🚀 ~ Changing to dark');
  };
  const setLightTheme = () => {
    console.log('🚀 ~ Changing to light');
  };

  return (
    <ThemeContext.Provider value={{ theme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
