import { Container } from "@mui/material";
import AbilityBar from "./AbilityBar/AbilityBar";
import CharacterProvider from "./CharacterContext";
import CharacterInfoBar from "./CharacterInfoBar/CharacterInfoBar";

const CharacterSheet = () => {
  return (
    <CharacterProvider>
      <Container maxWidth="xl">
        <div style={{ marginTop: "16px" }}>
          <CharacterInfoBar />
        </div>
        <div style={{ marginTop: "16px" }}>
          <AbilityBar />
        </div>
      </Container>
    </CharacterProvider>
  );
};

export default CharacterSheet;
