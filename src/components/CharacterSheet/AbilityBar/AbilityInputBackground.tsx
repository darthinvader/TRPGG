import { useTheme } from "@mui/material";
import { ReactComponent as AbilityVector } from "./svgs/ability.svg";
import { ReactComponent as AbilityDarkModeVector } from "./svgs/abilityDarkMode.svg";

const AbilityInputBackground = () => {
  const theme = useTheme();
  if (theme.palette.mode === "light") {
    return <AbilityVector style={{ height: 125, width: 125 }} />;
  } else {
    return (
      <AbilityDarkModeVector
        style={{ height: 125, width: 125, color: "blue" }}
      />
    );
  }
};

export default AbilityInputBackground;
