import React, { useEffect, useState } from "react";

// Custom hook to use device theme
function useDeviceTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      if (prefersDarkScheme.matches) {
        setTheme("dark");
        document.body.classList.add("dark-mode");
        document.body.classList.remove("light-mode");
      } else {
        setTheme("light");
        document.body.classList.add("light-mode");
        document.body.classList.remove("dark-mode");
      }
    };

    updateTheme(); // Set the initial theme
    prefersDarkScheme.addEventListener("change", updateTheme); // Listen for changes

    return () => {
      prefersDarkScheme.removeEventListener("change", updateTheme); // Cleanup listener on unmount
    };
  }, []);

  return theme;
}

export default useDeviceTheme;
