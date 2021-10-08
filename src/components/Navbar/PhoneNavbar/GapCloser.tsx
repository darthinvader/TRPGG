import { Box, darken } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const GapCloser = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: 50,
        bgcolor: darken(theme.palette.background.paper, 0.15),
      }}
    ></Box>
  );
};

export default GapCloser;
