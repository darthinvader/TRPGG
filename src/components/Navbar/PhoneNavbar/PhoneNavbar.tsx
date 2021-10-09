import { Box } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import ThemeSwitch from "../ThemeSwitch";
import Login from "../Login/Login";
import { List } from "@mui/material";
import NavLine from "../NavLine";
import GapCloser from "./GapCloser";
import ModalBar from "./ModalBar";

interface Navbar {
  links: { link: string; title: string }[];
  switchTheme: () => void;
}

const PhoneNavbar: React.FC<Navbar> = ({ links, switchTheme }) => {
  const theme = useTheme();
  return (
    <>
      <GapCloser />
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: "2",
          top: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            bgcolor: theme.custom.navbar,
            height: 50,
          }}
        >
          <ModalBar links={links} />
          <List sx={{ display: "flex", justifyContent: "end" }}>
            <ThemeSwitch switchTheme={switchTheme} />
            <Login />
          </List>
        </Box>
        <NavLine />
      </Box>
    </>
  );
};

export default PhoneNavbar;
