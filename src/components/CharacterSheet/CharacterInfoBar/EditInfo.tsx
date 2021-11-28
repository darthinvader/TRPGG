import EditIcon from "@mui/icons-material/Edit";
import { IconButton, useTheme } from "@mui/material";
const EditInfo = () => {
  const theme = useTheme();
  return (
    <IconButton
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
  );
};

export default EditInfo;
