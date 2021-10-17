import { Grid } from "@mui/material";
import AbilityUI from "./AbilityBox";

const AbilityBar = () => {
  return (
    <>
      <Grid item>
        <AbilityUI abilityName="Strength" />
      </Grid>
      <Grid item>
        <AbilityUI abilityName="Dexterity" />
      </Grid>
      <Grid item>
        <AbilityUI abilityName="Constitution" />
      </Grid>
      <Grid item>
        <AbilityUI abilityName="Intelligence" />
      </Grid>
      <Grid item>
        <AbilityUI abilityName="Wisdom" />
      </Grid>
      <Grid item>
        <AbilityUI abilityName="Charisma" />
      </Grid>
    </>
  );
};

export default AbilityBar;
