import { Box, List } from "@mui/material";
import { styled } from "@mui/system";
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
}));

const StyledList = styled(List)(({ theme }: any) => ({
  display: "flex",
}));

const Navbar: React.FC<NavbarProps> = ({ switchTheme }) => {
  return (
    <Container>
      <StyledList>
        {NAVIGATION_ITEMS.map((item) => (
          <NavbarLink item={item}></NavbarLink>
        ))}
      </StyledList>
      <StyledList>
        <ThemeSwitch switchTheme={switchTheme} />
      </StyledList>
    </Container>
  );
};

export default Navbar;
