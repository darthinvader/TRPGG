import { Dialog } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, List } from "@mui/material";
import NavbarLinks from "../NavbarLinks";
import { useTheme } from "@mui/material/styles";

interface ModalBarProps {
  links: { link: string; title: string }[];
}

const ModalBar: React.FC<ModalBarProps> = ({ links }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon sx={{ width: 30, height: 30 }} />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridColumnGap: 32,
            gridRowGap: 32,
            bgcolor: theme.custom.navbar,
          }}
        >
          <NavbarLinks links={links} />
        </List>
      </Dialog>
    </>
  );
};

export default ModalBar;
