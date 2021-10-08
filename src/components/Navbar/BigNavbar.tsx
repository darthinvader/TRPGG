import { List, Box, darken } from "@mui/material";
import { useTheme } from "@mui/material";
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
        <List sx={{ maxWidth: 1200, display: "flex" }}>
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
