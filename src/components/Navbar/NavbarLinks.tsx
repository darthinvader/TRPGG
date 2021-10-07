import { ListItem } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

interface Links {
  links: { link: string; title: string }[];
}

const NavbarLinks: React.FC<Links> = ({ links }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)

  const linkElements = links.map((link) => (
    <ListItem
      key={link.link}
      component={Link}
      to={link.link}
      sx={{ color: theme.palette.text.primary, fontSize: 32 }}
    >
      {link.title}
    </ListItem>
  ));
  return <>{linkElements}</>;
};

export default NavbarLinks;
