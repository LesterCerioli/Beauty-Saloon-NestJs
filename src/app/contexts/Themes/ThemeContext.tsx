'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface Theme {
  background: string;
  color: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  loadThemeFromFile: (file: File) => void;
  createTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>({
    background: '#ffffff',
    color: '#000000',
  });

  const loadThemeFromFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        try {
          const fileTheme = JSON.parse(event.target.result as string);
          setTheme(fileTheme);
        } catch (error) {
          console.error('Invalid theme file format:', error);
        }
      }
    };
    reader.readAsText(file);
  };

  const createTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, loadThemeFromFile, createTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};