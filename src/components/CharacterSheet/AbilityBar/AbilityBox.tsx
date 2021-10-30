import { Typography, Grid } from "@mui/material";
import AbilityInputBackground from "./AbilityInputBackground";
import { Box } from "@mui/system";
import BareInput from "../../../utilComponents/BareInput";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import { emptyAbilityScore } from "../../../interfaces/character/abilityScore";
import { abilityKey } from "../../../interfaces/character/character";

interface Props {
  abilityName: abilityKey;
}

const AbilityUI: React.FC<Props> = ({ abilityName }) => {
  const character = useCharacter();
  const { total, modifier } = character.abilities[abilityName];
  const { changeAbility } = useCharacterUpdate();

  const setAbility = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let abilityScore = { ...emptyAbilityScore };

    let ability: number | null = +e.target.value;
    if (e.target.value === "") {
      ability = null;
    } else if (ability > 100) {
      ability = 100;
    } else if (ability <= 0) {
      ability = 0;
    }
    abilityScore.base = ability;
    abilityScore.total = ability;

    if (abilityScore.total) {
      abilityScore.modifier = Math.floor((abilityScore.total - 10) / 2);
    }
    changeAbility(abilityName, abilityScore);
  };

  return (
    <Grid item>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 10,
            textAlign: "center",
            fontSize: 14,
            textTransform: "capitalize",
          }}
          variant="subtitle1"
        >
          {abilityName}
        </Typography>
        <BareInput
          inputProps={{
            style: {
              textAlign: "center",
              fontSize: 21,
            },
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "absolute",
            top: 37,
          }}
          value={total || ""}
          onChange={setAbility}
          type="number"
          placeholder="Score"
        />
        <Typography
          sx={{
            position: "absolute",
            textAlign: "center",
            top: 87,
          }}
          variant="h6"
        >
          {modifier ? (modifier > 0 ? `+${modifier}` : modifier) : modifier}
        </Typography>

        <AbilityInputBackground />
      </Box>
    </Grid>
  );
};
export default AbilityUI;
