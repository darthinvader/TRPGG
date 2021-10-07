import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { yellow } from "@mui/material/colors";
import { Box, darken } from "@mui/system";
import { useTheme } from "@emotion/react";
import ThemeSwitch from "./ThemeSwitch";
import Login from "./Login";
interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const BigNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)
  const NavbarLinks = links.map((link) => (
    <ListItem
      component={Link}
      to={link.link}
      sx={{ color: theme.palette.text.primary, fontSize: 32 }}
    >
      {link.title}
    </ListItem>
  ));
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
        <List sx={{ maxWidth: 1200 }}>{NavbarLinks}</List>

        <List sx={{ display: "flex" }}>
          <ThemeSwitch switchTheme={switchTheme} />
          <Login></Login>
        </List>
      </Box>
      <Box sx={{ bgcolor: yellow[400], height: "1px", zIndex: 100 }}></Box>
    </>
  );
};

export default BigNavbar;
