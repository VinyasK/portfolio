import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-name">Vinyas K</div>
      </div>
      <div className="navbar-right">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
