import { Grid } from "@mui/material";
import AbilityUI from "./AbilityBox";

const AbilityBar = () => {
  return (
    <Grid container direction="row" spacing={2}>
      <AbilityUI abilityName="strength" />
      <AbilityUI abilityName="dexterity" />
      <AbilityUI abilityName="constitution" />
      <AbilityUI abilityName="intelligence" />
      <AbilityUI abilityName="wisdom" />
      <AbilityUI abilityName="charisma" />
    </Grid>
  );
};

export default AbilityBar;
