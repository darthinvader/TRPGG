import { Container, Grid } from "@mui/material";
import AbilityBar from "./AbilityBar/AbilityBar";

const CharacterSheet = () => {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <AbilityBar />
      </Grid>
    </Container>
  );
};

export default CharacterSheet;
