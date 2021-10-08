import { ListItem } from "@mui/material";
import { useTheme } from "@mui/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Links {
  links: { link: string; title: string }[];
}

const NavbarLinks: React.FC<Links> = ({ links }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)
  console.log(theme);
  const linkElements = links.map((link) => (
    <Link to={link.link} key={link.link} style={{ textDecoration: "none" }}>
      <ListItem
        component={motion.div}
        sx={{ color: theme.custom.text, fontSize: 20 }}
        whileHover={{
          color: theme.palette.text.primary,
        }}
      >
        {link.title}
      </ListItem>
    </Link>
  ));
  return <>{linkElements}</>;
};

export default NavbarLinks;
