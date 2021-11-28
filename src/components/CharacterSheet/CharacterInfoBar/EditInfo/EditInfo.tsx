import EditIcon from "@mui/icons-material/Edit";
import { IconButton, useTheme } from "@mui/material";
import { useState } from "react";
import EditInfoModal from "./EditInfoModal";
const EditInfo = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
        sx={{
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translate(50%,-50%)",
          border: `1px solid ${theme.palette.primary.light}`,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <EditIcon />
      </IconButton>
      <EditInfoModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default EditInfo;
