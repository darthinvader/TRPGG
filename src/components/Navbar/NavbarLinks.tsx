import { ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

interface Links {
  links: { link: string; title: string }[];
}

const NavbarLinks: React.FC<Links> = ({ links }) => {
  const theme = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)
  console.log(theme);
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