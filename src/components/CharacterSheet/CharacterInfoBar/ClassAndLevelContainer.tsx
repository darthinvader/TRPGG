import { Button } from "@mui/material";
import ClassAndLevel from "./ClassAndLevel";

const ClassAndLevelContainer = () => {
  return (
    <span
      style={{
        display: "inline-block",
        overflowY: "auto",
        height: 108,
        border: "1px solid white",
        padding: "8px 16px",
        gap: 16,
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
