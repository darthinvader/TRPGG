import { Box, darken } from "@mui/system";
import { useTheme } from "@emotion/react";
import ThemeSwitch from "./ThemeSwitch";
import Login from "./Login";
import { List } from "@mui/material";

interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const PhoneNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: darken(theme.palette.background.paper, 0.15),
        height: 50,
      }}
    >
      <List sx={{ display: "flex" }}>
        <ThemeSwitch switchTheme={switchTheme} />
        <Login />
      </List>
    </Box>
  );
};

export default PhoneNavbar;
