import { useTheme } from "@contexts/themeTogglerContext";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const themeIsLight = theme === "light"
  

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
