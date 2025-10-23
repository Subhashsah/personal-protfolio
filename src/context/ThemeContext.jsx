import React, {createContext,useCallback,useContext, useEffect, useState} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // keep theme in localStorage and in state
  const [stored, setStored] = useLocalStorage('theme', 'light');
  const [theme, setTheme] = useState(stored);

  // callback to toggle theme
  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      setStored(next);
      return next;
    });
  }, [setStored]);

  // apply theme to document root using useLayoutEffect in App or here via useEffect
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);