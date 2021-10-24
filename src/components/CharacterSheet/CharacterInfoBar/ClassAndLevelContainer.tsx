import { Button } from "@mui/material";
import ClassAndLevel from "./ClassAndLevel";
import Paper from "@mui/material/Paper";

const ClassAndLevelContainer = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: 124,
        padding: "8px 16px",
        gap: 2,
      }}
    >
      <ClassAndLevel />
      <ClassAndLevel />
      <ClassAndLevel />
      <Button>Add New Class</Button>
    </Paper>
  );
};

export default ClassAndLevelContainer;
