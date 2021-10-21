import { ListItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

interface Links {
  links: { link: string; title: string }[];
}

const NavbarLinks: React.FC<Links> = ({ links }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const linkElements = links.map((link) => (
    <ListItem key={link.link} style={{ whiteSpace: "nowrap" }}>
      <Link
        to={link.link}
        style={{
          textDecoration: "none",
        }}
      >
        <Typography
          sx={{
            color: pathname.includes(link.link)
              ? theme.palette.text.primary
              : theme.custom.text,
            fontSize: 20,
            transition: "color 0.3s",
            borderBottom: pathname.includes(link.link)
              ? `1px solid ${theme.custom.text}`
              : "none",
            "&:hover": {
              color: theme.palette.text.primary,
              borderBottom: `1px solid ${theme.custom.text}`,
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
