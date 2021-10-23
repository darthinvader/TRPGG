import { Grid } from "@mui/material";
import AbilityUI from "./AbilityBox";

const AbilityBar = () => {
  return (
    <Grid container direction="row" spacing={2}>
      <AbilityUI abilityName="Strength" />
      <AbilityUI abilityName="Dexterity" />
      <AbilityUI abilityName="Constitution" />
      <AbilityUI abilityName="Intelligence" />
      <AbilityUI abilityName="Wisdom" />
      <AbilityUI abilityName="Charisma" />
    </Grid>
  );
};

export default AbilityBar;
