import { Container } from "@mui/material";
import AbilityBar from "./AbilityBar/AbilityBar";
import CharacterInfoBar from "./CharacterInfoBar/CharacterInfoBar";

const CharacterSheet = () => {
  return (
    <Container maxWidth="xl">
      <CharacterInfoBar />
      <AbilityBar />
    </Container>
  );
};

export default CharacterSheet;
