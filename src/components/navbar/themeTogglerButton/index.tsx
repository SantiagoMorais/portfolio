import { useTheme } from "@contexts/themeTogglerContext";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIsLight = theme === "light"
  

  return (
    <button onClick={toggleTheme} className="size-10 cursor-pointer duration-300 bg-none border-none">
      <FontAwesomeIcon
        data-testid="themeIcon"
        className={`duration-300 transition-transform text-medium text-textColor ${themeIsLight ? "rotate-180" : "rotate-0"}`}
        icon={faAdjust}
      />
    </button>
  );
};
