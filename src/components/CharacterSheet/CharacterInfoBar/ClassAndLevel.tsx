import { Autocomplete, TextField } from "@mui/material";
import Classes from "../../../interfaces/utils/classes";

const allClasses: string[] = [];

for (const [, value] of Object.entries(Classes)) {
  allClasses.push(value);
}

const ClassAndLevel = () => {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Autocomplete
        freeSolo
        sx={{ width: 100 }}
        disableClearable
        options={allClasses.map((option) => option)}
        renderInput={(params) => (
          <TextField variant="standard" {...params} label="Class" />
        )}
      />
      <TextField variant="standard" label="Level" sx={{ width: 70 }} />
    </div>
  );
};

export default ClassAndLevel;
