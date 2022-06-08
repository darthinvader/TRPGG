import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import { ReactComponent } from "../Icons/Right Top Bar.svg";

const Wrapper = styled("div")({ gridColumn: "2/span 2" });

const TopRightBarSVG = styled(ReactComponent)(({ theme }) => ({
  fill: theme.palette.primary.light,
}));

const TextFieldsContainer = styled("div")({
  zIndex: "10000",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyItems: "center",
});

const Field = styled(TextField)({});

const LevelClass = styled("div")({ display: "flex" });
const Level = styled(TextField)({});
const Class = styled(TextField)({});

const TopRightBar = () => {
  const { info } = useCharacter();
  const { changeInfo } = useCharacterUpdate();

  return (
    <Wrapper>
      <TopRightBarSVG />
      <TextFieldsContainer>
        <LevelClass>
          <Level variant="standard" label="Class" />
          <Class variant="standard" label="Level" type="number" />
        </LevelClass>
        <Field
          variant="standard"
          label="Background"
          value={info.background}
          onChange={(e) => changeInfo("background", e.target.value)}
        />
        <Field
          variant="standard"
          label="Race"
          value={info.race}
          onChange={(e) => changeInfo("race", e.target.value)}
        />
        <Field
          variant="standard"
          label="Alignment"
          value={info.alignment}
          onChange={(e) => changeInfo("alignment", e.target.value)}
        />
      </TextFieldsContainer>
    </Wrapper>
  );
};

export default TopRightBar;
