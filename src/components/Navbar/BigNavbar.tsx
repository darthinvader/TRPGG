import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

interface Navbar {
  links: { link: string; title: string }[];
}

const BigNavbar: React.FC<Navbar> = ({ links }) => {
  const NavbarLinks = links.map((link) => (
    <ListItem
      component={Link}
      to={link.link}
      sx={{ color: "white", fontSize: 32 }}
    >
      {link.title}
    </ListItem>
  ));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        bgcolor: grey[900],
        height: 50,
      }}
    >
      <List>{NavbarLinks}</List>
    </Box>
  );
};

export default BigNavbar;
