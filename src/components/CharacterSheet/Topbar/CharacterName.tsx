import { ReactComponent as NameBar } from "../Icons/Right Top Bar.svg";
import { useCharacter } from "../CharacterContext";
import { TextField } from "@mui/material";

const CharacterName = () => {
  // const { info } = useCharacter();
  return (
    <div style={{ position: "relative" }}>
      <NameBar style={{ fill: "white", width: "100% " }} />
      <TextField
        style={{
          position: "absolute",
          left: "25px",
          top: "13px",
          width: "100%",
        }}
        variant="standard"
        label="Character Name"
      />
    </div>
  );
};
export default CharacterName;
