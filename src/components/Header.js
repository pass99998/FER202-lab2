import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={`header py-3 px-4 mb-4 border-bottom d-flex justify-content-between align-items-center ${theme === 'dark' ? 'bg-dark text-white border-secondary' : 'bg-light text-dark'}`}>
      <div className="d-flex align-items-center gap-2">
        <h1 className="h3 mb-0 fw-bold">Movie Manager</h1>
      </div>
      <button
        onClick={toggleTheme}
        className={`btn btn-sm d-flex align-items-center gap-2 ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? (
          <>
            <FaSun className="text-warning" /> Light Mode
          </>
        ) : (
          <>
            <FaMoon className="text-primary" /> Dark Mode
          </>
        )}
      </button>
    </header>
  );
}

export default Header;
