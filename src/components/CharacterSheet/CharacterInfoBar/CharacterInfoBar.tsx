import BareInput from "../../../utilComponents/BareInput";
import CharacterImage from "./CharacterImage";
import ClassAndLevelContainer from "./ClassAndLevelContainer";

const CharacterInfoBar = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <CharacterImage imageUrl="https://i.pinimg.com/236x/cd/93/06/cd9306aa0acf3e3ffc55443d99600b7f.jpg" />
      <BareInput
        variant="standard"
        label="Character Name"
        inputProps={{
          style: {
            fontSize: 24,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 24,
          },
        }}
      />

      <BareInput
        inputProps={{
          style: {
            fontSize: 16,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 16,
          },
        }}
        label="Race"
      />
      <BareInput
        variant="standard"
        label="Background"
        inputProps={{
          style: {
            fontSize: 14,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 14,
          },
        }}
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Alignment"
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Age"
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Eyes"
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Height"
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Skin"
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Weight"
      />
      <BareInput
        inputProps={{
          style: {
            fontSize: 12,
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 12,
          },
        }}
        label="Hair"
      />
      <ClassAndLevelContainer />
    </div>
  );
};

export default CharacterInfoBar;
