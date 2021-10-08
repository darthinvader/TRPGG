import { ListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface Links {
  links: { link: string; title: string }[];
}

const NavbarLinks: React.FC<Links> = ({ links }) => {
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)
  console.log(theme);
  const linkElements = links.map((link) => (
    <ListItem key={link.link} component={motion.p}>
      <Link
        to={link.link}
        style={{
          color: theme.custom.text,
          fontSize: 20,
          textDecoration: "none",
        }}
      >
        {link.title}
      </Link>
    </ListItem>
  ));
  return <>{linkElements}</>;
};

export default NavbarLinks;
