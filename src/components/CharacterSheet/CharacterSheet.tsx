import { Container } from "@mui/material";
import CharacterProvider from "./CharacterContext";
import Topbar from "./Topbar/Topbar";

const CharacterSheet = () => {
  return (
    <CharacterProvider>
      <Container maxWidth="lg">
        <Topbar />
      </Container>
    </CharacterProvider>
  );
};

export default CharacterSheet;
