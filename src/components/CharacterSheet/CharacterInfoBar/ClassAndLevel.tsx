import { Autocomplete, Button, TextField } from "@mui/material";
import Classes from "../../../interfaces/utils/classes";

const allClasses: string[] = [];

for (const [, value] of Object.entries(Classes)) {
  allClasses.push(value);
}

const ClassAndLevel = () => {
  return (
    <>
      <Autocomplete
        freeSolo
        options={allClasses.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      <TextField />
      <Button>X</Button>
    </>
  );
};

export default ClassAndLevel;
