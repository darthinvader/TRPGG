import BigNavbar from "./BigNavbar";

const links = [{ link: "/books", title: "Books" }];

interface NavbarProps {
  switchTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ switchTheme }) => {
  return <BigNavbar links={links} switchTheme={switchTheme}></BigNavbar>;
};

export default Navbar;
