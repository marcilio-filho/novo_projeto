// src/components/ToggleDarkMode.js
import React from 'react';
import { useDarkMode } from '../../../contexts/DarkModeContext';
import Botao from './Button';
import Icons from '../../Icons';

const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (

    <Botao
    name="darkMode"
    icon={darkMode ? Icons.icons.sol : Icons.icons.lua}
    text={darkMode ? "Modo Claro" : "Modo Escuro"}
    tooltip={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    onClick={toggleDarkMode}
    />


  );
};

export default ToggleDarkMode;
