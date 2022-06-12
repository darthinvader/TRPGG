import { Box, List } from "@mui/material";
import { styled } from "@mui/system";
import useHeightPosition from "../../hooks/HeightPosition";
import Login from "./Login/Login";
import NavbarLink from "./NavbarLink";
import ThemeSwitch from "./ThemeSwitch";

export const NAVIGATION_ITEMS = [
  { link: "/books", title: "Books" },
  { link: "/characterSheet", title: "Character Sheet" },
];

export interface NavbarProps {
  switchTheme: () => void;
}

const Container = styled(Box)(({ theme }: any) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  bgcolor: theme.custom.navbar,
  height: 50,
  borderBottom: "1px solid #ccc",
  background: theme.custom.navbar,
  zIndex: 1,
}));

const StyledList = styled(List)(({ theme }: any) => ({
  display: "flex",
}));

const Navbar: React.FC<NavbarProps> = ({ switchTheme }) => {
  const height = useHeightPosition();
  return (
    <>
      {height >= 50 ? <Container /> : null}{" "}
      {/* Used to not change the height of the page when the navbar detaches */}
      <Container
        style={height >= 50 ? { position: "fixed", top: 0 } : undefined}
      >
        <StyledList>
          {NAVIGATION_ITEMS.map((item) => (
            <NavbarLink item={item}></NavbarLink>
          ))}
        </StyledList>
        <StyledList>
          <ThemeSwitch switchTheme={switchTheme} />
          <Login />
        </StyledList>
      </Container>
    </>
  );
};

export default Navbar;
