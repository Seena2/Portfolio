import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //handler functions
  const handleThemeToggle = () => {
    if (isDarkMode) {
      //access the list of classes in the document and remove class
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button onClick={handleThemeToggle}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-600" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
}

export default ThemeToggle;
