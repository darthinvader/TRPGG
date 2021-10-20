import { TextField, Typography, Grid } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Box } from "@mui/system";
import { useState } from "react";
import AbilityInputBackground from "./AbilityInputBackground";

interface Props {
  abilityName: string;
}

const AbilityUI: React.FC<Props> = ({ abilityName }) => {
  const [Ability, setAbility] = useState("");
  const setAbilityWithCap = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let ability = +e.target.value;
    if (e.target.value === "") {
      setAbility("");
    } else if (ability > 100) {
      setAbility("100");
    } else if (ability < 0) {
      setAbility("0");
    } else {
      setAbility(e.target.value);
    }
  };

  const calculateModifier = () => {
    if (Ability !== "") {
      return Math.floor((+Ability - 10) / 2);
    } else {
      return "";
    }
  };

  return (
    <Grid item>
      <Box
        sx={{
          position: "relative",
          width: 125,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            top: 10,
            width: 125,
            textAlign: "center",
            fontSize: 14,
          }}
          variant="subtitle1"
        >
          {abilityName}
        </Typography>
        <TextField
          css={css`
            input {
              border: 0;
            }
            /* Chrome, Safari, Edge, Opera */
            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              margin: 0;
            }
            /* Firefox */
            input[type="number"] {
              -moz-appearance: textfield;
            }
          `}
          sx={{
            position: "absolute",
            top: 37,
            width: 100,
          }}
          InputProps={{
            disableUnderline: true,
            style: { fontSize: 23 },
          }}
          inputProps={{
            style: {
              textAlign: "center",
            },
          }}
          value={Ability}
          onChange={setAbilityWithCap}
          type="number"
          variant="standard"
          placeholder="Score"
        ></TextField>
        <Typography
          sx={{
            position: "absolute",
            width: 125,
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
