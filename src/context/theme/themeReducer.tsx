import { Theme } from '@react-navigation/native';

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' };

export interface ThemeState extends Theme {
  currentTheme: 'Light' | 'Dark';
  dividerColor: string;
}

const lightTheme: ThemeState = {
  currentTheme: 'Light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '',
    background: '',
    card: '',
    text: '',
    border: '',
    notification: '',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme };

    default:
      return state;
  }
};
