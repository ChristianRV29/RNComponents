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
    primary: 'rgb(49, 82, 229)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(0, 111, 155)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(219, 219, 244)',
    notification: 'rgb(156, 144, 221)',
  },
};

const darkTheme: ThemeState = {
  currentTheme: 'Dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: 'rgb(168, 235, 234)',
    background: 'rgb(12, 10, 44)',
    card: 'rgb(97, 136, 164)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(140, 140, 194)',
    notification: 'rgb(57, 78, 125)',
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
