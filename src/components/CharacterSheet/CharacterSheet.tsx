import { Container } from "@mui/material";
import CharacterProvider from "./CharacterContext";
import CharacterName from "./Topbar/CharacterName";
import TopRightBar from "./Topbar/TopRightBar";
import { styled } from "@mui/system";

const GridContainer = styled(Container)({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
});

const CharacterSheet = () => {
  return (
    <CharacterProvider>
      <GridContainer maxWidth="lg">
        <CharacterName />
        <TopRightBar />
      </GridContainer>
    </CharacterProvider>
  );
};

export default CharacterSheet;
