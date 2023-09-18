import React, { useContext } from "react";

import { themes, ThemeContext } from "../../context/themeContext"
import { ButtonHeader } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export const ButtonToggler = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <ButtonHeader onClick={toggleTheme} checked={theme === themes.light}>
        {theme === themes.light ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </ButtonHeader>
    </div>
  );
};
