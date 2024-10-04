import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState("dark");
  const themeIsLight = theme === "light"

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.classList.toggle("light", newTheme === "light");
  };
  
  return (
    <button onClick={toggleTheme} className="size-10 cursor-pointer bg-none border-none">
      <FontAwesomeIcon
        data-testid="themeIcon"
        className={`transition-all duration-100 text-medium text-textColor hover:text-primary  ${themeIsLight ? "rotate-180" : "rotate-0"}`}
        icon={faAdjust}
      />
    </button>
  );
};
