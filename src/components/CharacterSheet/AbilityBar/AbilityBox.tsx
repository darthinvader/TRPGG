import { Typography, Grid } from "@mui/material";
/** @jsxImportSource @emotion/react */
import AbilityInputBackground from "./AbilityInputBackground";
import { Box } from "@mui/system";
import BareInput from "../../../utilComponents/BareInput";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import { getAbility } from "../../../interfaces/character/characterUtils";
import { emptyAbilityScore } from "../../../interfaces/character/abilityScore";

interface Props {
  abilityName: string;
}

const AbilityUI: React.FC<Props> = ({ abilityName }) => {
  const character = useCharacter();
  const { total, modifier } = getAbility(character, abilityName);
  const { changeAbility } = useCharacterUpdate();

  const setAbilityWithCap = (
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
          value={total}
          onChange={setAbilityWithCap}
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
