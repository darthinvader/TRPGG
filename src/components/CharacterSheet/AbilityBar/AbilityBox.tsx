import { Typography, Grid } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { useState } from "react";
import AbilityInputBackground from "./AbilityInputBackground";
import { Box } from "@mui/system";
import BareInput from "../../../utilComponents/BareInput";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";

interface Props {
  abilityName: string;
}

const AbilityUI: React.FC<Props> = ({ abilityName }) => {
  const [Ability, setAbility] = useState("");
  const character = useCharacter();
  // const { total, modifier } = character[abilityName.toLowerCase()];
  const { changeAbility } = useCharacterUpdate();

  const setAbilityWithCap = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let ability = +e.target.value;
    if (e.target.value === "") {
      setAbility("");
    } else if (ability > 100) {
      setAbility("100");
    } else if (ability <= 0) {
      setAbility("0");
    } else {
      setAbility(e.target.value);
    }
  };

  const calculateModifier = () => {
    if (Ability !== "") {
      const modifier = Math.floor((+Ability - 10) / 2);
      return modifier > 0 ? `+${modifier}` : modifier;
    } else {
      return "";
    }
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
          value={Ability}
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
          {calculateModifier()}
        </Typography>

        <AbilityInputBackground />
      </Box>
    </Grid>
  );
};
export default AbilityUI;
