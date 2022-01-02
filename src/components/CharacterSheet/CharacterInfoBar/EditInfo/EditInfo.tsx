import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import EditInfoModal from "./EditInfoModal";
import { ImArrowUp } from "react-icons/im";
const EditInfo = () => {
  const theme = useTheme();
  const [openEdit, setOpenEdit] = useState(false);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        position: "absolute",
        right: "0px",
        top: "50%",
        transform: "translate(50%,-50%)",
      }}
    >
      <Tooltip title="Level Up">
        <IconButton
          sx={{
            border: `1px solid ${theme.palette.primary.light}`,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <ImArrowUp />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Character Info">
        <IconButton
          onClick={() => {
            setOpenEdit(true);
          }}
          sx={{
            border: `1px solid ${theme.palette.primary.light}`,
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

      <EditInfoModal
        open={openEdit}
        onClose={() => {
          setOpenEdit(false);
        }}
        update={() => {
          setOpenEdit(false);
        }}
      />
    </Box>
  );
};

export default EditInfo;
