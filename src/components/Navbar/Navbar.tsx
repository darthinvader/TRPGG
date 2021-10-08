import useWindowDimensions from "../../hooks/useWindowDimensions";
import BigNavbar from "./BigNavbar/BigNavbar";
import PhoneNavbar from "./PhoneNavbar/PhoneNavbar";

const links = [
  { link: "/books", title: "Books" },
  { link: "/gen", title: "Generators" },
];

interface NavbarProps {
  switchTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ switchTheme }) => {
  const { width } = useWindowDimensions();
  if (width > 1024) {
    return <BigNavbar links={links} switchTheme={switchTheme} />;
  } else {
    return <PhoneNavbar links={links} switchTheme={switchTheme} />;
  }
};

export default Navbar;
