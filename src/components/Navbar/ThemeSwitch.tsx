import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ListItem, useTheme, IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/system";

interface ThemeSwitchProps {
  switchTheme: () => void;
}

const StyledListItem = styled(ListItem)({
  cursor: "pointer",
});

const StyledIconButton = styled(IconButton)(({ theme }: any) => ({
  color: theme.palette.text.primary,
}));

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ switchTheme }) => {
  const theme = useTheme();
  return (
    <StyledListItem onClick={switchTheme}>
      <Tooltip title="Dark Mode On/Off">
        <StyledIconButton>
          {theme.palette.mode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </StyledIconButton>
      </Tooltip>
    </StyledListItem>
  );
};

export default ThemeSwitch;
