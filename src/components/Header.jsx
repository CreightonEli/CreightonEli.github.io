// Nav bar for the website
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon, DesktopIcon } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

const MODES = ['system', 'light', 'dark'];

const THEME_ICONS = {
  light: <SunIcon size={24} weight="bold" />,
  dark: <MoonIcon size={24} weight="bold" />,
  system: <DesktopIcon size={24} weight="bold" />,
};

function Header() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return MODES.includes(savedTheme) ? savedTheme : 'system';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') {
      root.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      root.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const cycleTheme = () => {
    const nextIndex = (MODES.indexOf(theme) + 1) % MODES.length;
    setTheme(MODES[nextIndex]);
  };
  const nextTheme = MODES[(MODES.indexOf(theme) + 1) % MODES.length];

  return (
    <header>
        <nav>
            <div className='logo'>
              <Link to={"/"}>
                {/* <img src="../src/assets/hero-placeholder.png" alt="" /> */}
                EC
              </Link>
            </div>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/projects"}><li>Projects</li></Link>
                <Link to={"/resume"}><li>Resume</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
            </ul>
            <button
              className='dark-mode-btn'
              onClick={cycleTheme}
              aria-label={`Current theme: ${theme}. Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
            >
              {THEME_ICONS[theme]}
            </button>
        </nav>
    </header>
  )
}

export default Header