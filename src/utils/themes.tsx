import { darkScrollbar } from "@mui/material";
import { grey, indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      text: string;
      navbar: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      text?: string;
      navbar?: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  custom: {
    text: grey[800],
    navbar: grey[300],
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  custom: {
    text: grey[300],
    navbar: grey[900],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});

export const darkBlueTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#00162b",
      default: "#00162b",
    },
  },
  custom: {
    text: grey[400],
    navbar: "#00162b",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
