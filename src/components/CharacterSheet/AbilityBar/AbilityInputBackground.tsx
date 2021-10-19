import { useTheme } from "@mui/material";
import { ReactComponent as AbilityVector } from "./ability.svg";
import { ReactComponent as AbilityDarkModeVector } from "./abilityDarkMode.svg";

const AbilityInputBackground = () => {
  const theme = useTheme();
  if (theme.palette.mode === "light") {
    return <AbilityVector style={{ height: 125, width: 125 }} />;
  } else {
    return (
      <AbilityDarkModeVector
        // fill="#333"
        // stroke="blue"
        style={{ height: 125, width: 125, color: "blue" }}
      />
    );
  }
};

export default AbilityInputBackground;
