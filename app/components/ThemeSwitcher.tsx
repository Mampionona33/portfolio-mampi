"use client";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Vérifie le mode sombre enregistré dans le localStorage
    const darkModePreference = localStorage.getItem("dark-mode") === "true";
    setDarkMode(darkModePreference);
    if (darkModePreference) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("dark-mode", newDarkMode.toString());
      if (newDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newDarkMode;
    });
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
