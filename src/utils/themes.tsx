import { darkScrollbar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    custom: {
      text: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    custom?: {
      text?: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  custom: {
    text: grey[800],
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  custom: {
    text: grey[400],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});

export const blueTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#00162b",
      default: "#00162b",
    },
  },
  custom: {
    text: grey[400],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
});
