import { useTheme } from "@mui/material";
import { ReactComponent as AbilityVector } from "./ability.svg";
import { ReactComponent as AbilityDarkModeVector } from "./abilityDarkMode.svg";
/** @jsxImportSource @emotion/react */

const AbilityInputBackground = () => {
  const theme = useTheme();
  if (theme.palette.mode === "light") {
    return <AbilityVector style={{ height: 150, width: 150 }} />;
  } else {
    return <AbilityDarkModeVector style={{ height: 150, width: 150 }} />;
  }
};

export default AbilityInputBackground;
