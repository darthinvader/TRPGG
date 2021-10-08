import { ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface Links {
  links: { link: string; title: string }[];
}

const NavbarLinks: React.FC<Links> = ({ links }) => {
  const theme = useTheme();
  const linkElements = links.map((link) => (
    <ListItem key={link.link}>
      <Link
        to={link.link}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            color: theme.custom.text,
            fontSize: 20,
            transition: "color 0.3s",
            "&:hover": {
              color: theme.palette.text.primary,
            },
          }}
        >
          {link.title}
        </Typography>
      </Link>
    </ListItem>
  ));
  return <>{linkElements}</>;
};

export default NavbarLinks;
