import { ReactComponent } from "../Icons/Right Top Bar.svg";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const NameBar = styled(ReactComponent)({ fill: "white", width: "26%" });

const NameTextField = styled(TextField)({
  position: "absolute",
  left: "2%",
  top: "13px",
  width: "22%",
});

const Wrapper = styled("div")({
  position: "relative",
});

const CharacterName = () => {
  const { info } = useCharacter();
  const { changeInfo } = useCharacterUpdate();

  return (
    <Wrapper>
      <NameBar />
      <NameTextField
        variant="standard"
        label="Character Name"
        value={info.name}
        onChange={(event) => changeInfo("name", event.target.value)}
      />
    </Wrapper>
  );
};
export default CharacterName;
