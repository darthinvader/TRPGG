import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ListItem } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@emotion/react";

interface ThemeSwitchProps {
  switchTheme: () => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ switchTheme }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)
  return (
    <ListItem sx={{ cursor: "pointer" }} onClick={switchTheme}>
      <Tooltip title="Dark Mode On/Off">
        <IconButton sx={{ color: theme.palette.text.primary }}>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default ThemeSwitch;
