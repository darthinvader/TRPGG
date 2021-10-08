import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import NavLine from "../NavLine";
import BigNavbarContent from "./BigNavbarContent";
interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const BigNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: theme.custom.navbar,
          height: 50,
        }}
      >
        <BigNavbarContent links={links} switchTheme={switchTheme} />
      </Box>
      <NavLine />
    </>
  );
};

export default BigNavbar;
