import { useState } from 'react';
import { useTheme } from '../../contexts/Themes/ThemeContext';

const ThemeManager: React.FC = () => {
  const { theme, loadThemeFromFile, createTheme } = useTheme();
  const [newTheme, setNewTheme] = useState<{ background: string; color: string }>({
    background: theme.background,
    color: theme.color,
  });
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      loadThemeFromFile(file);
    }
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTheme({ ...newTheme, [e.target.name]: e.target.value });
  };

  const handleSaveTheme = () => {
    createTheme(newTheme);
  };

  return (
    <div>
      <h2>Theme Manager</h2>
      <div>
        <h3>Upload External Theme</h3>
        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
        />
        {fileName && <p>Uploaded theme file: {fileName}</p>}
      </div>

      <div>
        <h3>Create and Adjust Theme</h3>
        <div>
          <label>
            Background Color:
            <input
              type="color"
              name="background"
              value={newTheme.background}
              onChange={handleThemeChange}
            />
          </label>
          <label>
            Text Color:
            <input
              type="color"
              name="color"
              value={newTheme.color}
              onChange={handleThemeChange}
            />
          </label>
          <button onClick={handleSaveTheme}>Save Theme</button>
        </div>
      </div>

      {/* Render child components here for theme preview/edit */}
    </div>
  );
};

export default ThemeManager;
