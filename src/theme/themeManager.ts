import { useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';

export type ThemeType = 'light' | 'dark';

let currentTheme: ThemeType = 'light';
const listeners: ((theme: ThemeType) => void)[] = [];

export const setTheme = (theme: ThemeType) => {
  currentTheme = theme;
  listeners.forEach((cb) => cb(theme));
};

export const toggleDarkMode = () => {
  setTheme(currentTheme === 'light' ? 'dark' : 'light');
};

export const useTheme = (): ThemeType => {
  const systemTheme = useColorScheme();
  const normalizedTheme =
    systemTheme === 'dark' || systemTheme === 'light'
      ? systemTheme
      : currentTheme;

  const [theme, setThemeState] = useState<ThemeType>(normalizedTheme);

  useEffect(() => {
    const listener = (newTheme: ThemeType) => setThemeState(newTheme);
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return theme;
};
