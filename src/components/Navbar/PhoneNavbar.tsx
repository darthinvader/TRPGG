import { Box, darken } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import ThemeSwitch from "./ThemeSwitch";
import Login from "./Login";
import { List } from "@mui/material";
import NavbarLinks from "./NavbarLinks";
import NavLine from "./NavLine";

interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const PhoneNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)

  return (
    <>
      <Box
        sx={{
          height: 50,
          bgcolor: darken(theme.palette.background.paper, 0.15),
        }}
      ></Box>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: "10000",
          top: 0,
        }}
      >
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
            <Login />
            <ThemeSwitch switchTheme={switchTheme} />
          </List>
          <List sx={{ display: "flex" }}>
            <NavbarLinks links={links} />
          </List>
        </Box>
        <NavLine />
      </Box>
    </>
  );
};

export default PhoneNavbar;
