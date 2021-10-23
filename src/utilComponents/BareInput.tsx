import { TextField, TextFieldProps } from "@mui/material";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const BareInput = (props: TextFieldProps) => (
  <TextField
    css={css`
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
    InputProps={{
      disableUnderline: true,
    }}
    variant="standard"
    {...props}
  />
);

export default BareInput;
