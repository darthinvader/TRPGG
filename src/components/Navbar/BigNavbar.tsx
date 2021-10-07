import { List } from "@mui/material";
import { Box, darken } from "@mui/system";
import { useTheme } from "@emotion/react";
import ThemeSwitch from "./ThemeSwitch";
import Login from "./Login";
import NavLine from "./NavLine";
import NavbarLinks from "./NavbarLinks";
interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const BigNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: darken(theme.palette.background.paper, 0.15),
          height: 50,
        }}
      >
        <List sx={{ maxWidth: 1200 }}>
          <NavbarLinks links={links} />
        </List>

        <List sx={{ display: "flex" }}>
          <ThemeSwitch switchTheme={switchTheme} />
          <Login />
        </List>
      </Box>
      <NavLine />
    </>
  );
};

export default BigNavbar;
