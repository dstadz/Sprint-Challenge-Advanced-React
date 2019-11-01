import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  console.log(darkMode)
  const toggleMode = e => {
    e.preventDefault();
    console.log(darkMode)
    setDarkMode(!darkMode);
  };
  return (
        <button
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        >Dark</button>
  );
};

export default Navbar;
