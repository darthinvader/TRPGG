import { Container } from "@mui/material";
import AbilityBar from "./AbilityBar/AbilityBar";
import CharacterInfoBar from "./CharacterInfoBar/CharacterInfoBar";

const CharacterSheet = () => {
  return (
    <Container maxWidth="xl">
      <div style={{ marginTop: "16px" }}>
        <CharacterInfoBar />
      </div>
      <div style={{ marginTop: "16px" }}>
        <AbilityBar />
      </div>
    </Container>
  );
};

export default CharacterSheet;
