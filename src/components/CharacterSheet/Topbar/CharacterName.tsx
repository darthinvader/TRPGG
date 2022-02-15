import { ReactComponent } from "../Icons/Right Top Bar.svg";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "inline-box",
  width: "35%",
  position: "relative",
});

const NameBar = styled(ReactComponent)(({ theme }) => ({
  fill: theme.palette.primary.light,
}));

const NameTextField = styled(TextField)({
  position: "absolute",
  left: "7.5%",
  top: "16px",
  width: "85%",
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
