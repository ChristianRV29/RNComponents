import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'Light' | 'Dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'rgb(82, 49, 55)',
    background: 'rgb(11, 8, 8)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(34, 34, 169)',
    notification: 'rgb(113, 84, 83)',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };
    case 'set_dark_theme':
      return { ...darkTheme };
    default:
      return state;
  }
};
