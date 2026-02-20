import { useState, useEffect } from 'react';

const Theme = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('Original');

 const themes = {
  Original: {
    '--primary': '#5e3bee',
    '--heading-color': '#282938',
    '--second-title-color': '#000000',
    '--text-color': '#1c1e53',
    '--shade': '#f5fcff',
    '--button-color': '#e62872',
    '--card-color': '#f5fcff',
    '--background': '#ffffff'
  },
  Dark: {
    '--primary': '#ffffff',
    '--heading-color': '#b0b3b8',
    '--second-title-color': '#bebfbe',
    '--text-color': '#fffffffa',
    '--shade': '#3a3b3c',
    '--button-color': '#d1dbe4',
    '--card-color': '#404241',
    '--background': '#212322'
  },
  Retro: {
    '--primary': '#e06d66',
    '--heading-color': '#e08d99',
    '--second-title-color': '#db4646',
    '--text-color': '#db4e49',
    '--shade': '#faf0e6',
    '--button-color': '#e39f91',
    '--card-color': '#fff0db',
    '--background': '#EDE8D0' 
  },
  Dim: {
    '--primary': '#FFFDFD',
    '--heading-color': '#FAFAFA',
    '--second-title-color': '#F2FAFF',
    '--text-color': '#D3D3D3',
    '--shade': '#898989',
    '--button-color': '#C4C4C4',
    '--card-color': '#6D8196',
    '--background': '#666666'
  },
  Sage: {
    '--primary': '#FFD2A1',
    '--heading-color': '#EDE8D0',
    '--second-title-color': '#f9de64',
    '--text-color': '#FAE8B4',
    '--shade': '#7b9e87',
    '--button-color': '#FFEA80',
    '--card-color': '#a3ad88',
    '--background': '#735639'
  }
};


  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (!theme) return;

    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(key, theme[key]);
    });

    localStorage.setItem('theme', themeName);
    setCurrentTheme(themeName);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'Original';
    applyTheme(savedTheme);
  }, []);

  return (
    <div 
      className="theme-button-container global-theme-button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="theme-button">🎨 Theme</button>

      {isHovered && (
        <div className="theme-dropdown">
          {Object.keys(themes).map(themeName => (
            <button
              key={themeName}
              className={`theme-option ${themeName === currentTheme ? 'active' : ''}`}
              style={{ backgroundColor: themes[themeName]['--shade'] }}
              onClick={() => applyTheme(themeName)}
            >
              {themeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Theme;
