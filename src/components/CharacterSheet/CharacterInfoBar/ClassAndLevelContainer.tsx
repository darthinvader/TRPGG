import { Button } from "@mui/material";
import ClassAndLevel from "./ClassAndLevel";

const ClassAndLevelContainer = () => {
  return (
    <span
      style={{
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
        height: 124,
        border: "1px solid white",
        padding: "8px 16px",
        gap: 8,
      }}
    >
      <ClassAndLevel />
      <ClassAndLevel />
      <ClassAndLevel />
      <Button>Add New Class</Button>
    </span>
  );
};

export default ClassAndLevelContainer;
