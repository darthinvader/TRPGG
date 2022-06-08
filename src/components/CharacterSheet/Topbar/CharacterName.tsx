import { ReactComponent } from "../Icons/Right Top Bar.svg";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({ gridColumn: "1/span 1" });

const NameBar = styled(ReactComponent)(({ theme }) => ({
  fill: theme.palette.primary.light,
}));

const NameTextField = styled(TextField)({});

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
