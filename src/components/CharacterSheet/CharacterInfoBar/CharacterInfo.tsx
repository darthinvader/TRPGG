import { TextField } from "@mui/material";
import ClassAndLevelContainer from "./ClassAndLevelContainer";

const CharacterInfo = () => {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <TextField variant="standard" label="Character Name" />
        <TextField variant="standard" label="Background" />
        <TextField variant="standard" label="Race" />
        <TextField variant="standard" label="Alignment" />
        <TextField variant="standard" label="Age" />
        <TextField variant="standard" label="Eyes" />
        <TextField variant="standard" label="Height" />
        <TextField variant="standard" label="Skin" />
        <TextField variant="standard" label="Weight" />
        <TextField variant="standard" label="Hair" />
      </div>
      <div>
        <ClassAndLevelContainer />
      </div>
    </div>
  );
};

export default CharacterInfo;
