import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-theme", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    document.body.style.setProperty("--wave-x", `${x}px`);
    document.body.style.setProperty("--wave-y", `${y}px`);

    document.body.classList.add("animating");

    // Attend la fin de l'animation
    setTimeout(() => {
      setDarkMode(!darkMode);
      setTimeout(() => {
        document.body.classList.remove("animating");
      }, 500);
    }, 50);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "0.5rem 0.8rem",
        fontSize: "1.2rem",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "2px solid var(--text-color)",
        color: "var(--text-color)",
        cursor: "pointer",
        transition: "all 0.3s ease",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <i className={`uil ${darkMode ? "uil-sun" : "uil-moon"}`}></i>
    </button>
  );
};

export default ThemeToggle;
