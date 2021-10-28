import { Grid } from "@mui/material";
import Ability from "../../../interfaces/utils/ability";
import AbilityUI from "./AbilityBox";

const AbilityBar = () => {
  return (
    <Grid container direction="row" spacing={2}>
      <AbilityUI abilityName={Ability.Strength} />
      <AbilityUI abilityName={Ability.Dexterity} />
      <AbilityUI abilityName={Ability.Constitution} />
      <AbilityUI abilityName={Ability.Intelligence} />
      <AbilityUI abilityName={Ability.Wisdom} />
      <AbilityUI abilityName={Ability.Charisma} />
    </Grid>
  );
};

export default AbilityBar;
