import { useTheme } from "@/app/contexts/Themes/ThemeContext";


const ThemedComponent = () => {
    const { theme } = useTheme(); // Garante que useTheme está dentro de ThemeProvider
  
    return (
      <div style={{ background: theme.background, color: theme.color }}>
        <h1>Themed Component</h1>
      </div>
    );
  };
  
  export default ThemedComponent;