import { useTheme } from "@mui/material";
import { ReactComponent as Ability } from "./svgs/Ability.svg";

const AbilityInputBackground = () => {
  const theme = useTheme();
  if (theme.palette.mode === "light") {
    return <Ability fill="transparent" stroke="blue" style={{ height: 125 }} />;
  } else {
    return (
      <Ability fill="transparent" stroke="yellow" style={{ height: 125 }} />
    );
  }
};

export default AbilityInputBackground;
