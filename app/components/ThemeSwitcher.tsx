"use client"; // Ensure this component is client-side only
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

const ThemeSwitcher: React.FC = () => {
  // Set the default to true for dark mode
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    // Check for the stored preference in localStorage
    const darkModePreference = localStorage.getItem("dark-mode");

    if (darkModePreference === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (darkModePreference === "false") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      // If no preference is found, set dark mode as the default
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("dark-mode", "true"); // Save the preference
    }
  }, []); // Run this only on the initial mount

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      // Update local storage with the new preference
      localStorage.setItem("dark-mode", newDarkMode.toString());

      // Toggle the dark class on the document element
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
      <FontAwesomeIcon
        icon={darkMode ? faMoon : faSun}
        className={darkMode ? "text-yellow-400" : "text-gray-800"}
      />
    </button>
  );
};

export default ThemeSwitcher;
