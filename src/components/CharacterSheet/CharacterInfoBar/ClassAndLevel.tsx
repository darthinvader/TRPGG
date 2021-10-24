import { Autocomplete, TextField } from "@mui/material";
import Classes from "../../../interfaces/utils/classes";
import BareInput from "../../../utilComponents/BareInput";

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
          <TextField
            {...params}
            InputProps={{ ...params.InputProps, disableUnderline: true }}
            label="Class"
            variant="standard"
          />
        )}
      />
      <BareInput label="Level" sx={{ width: 70 }} />
    </div>
  );
};

export default ClassAndLevel;
