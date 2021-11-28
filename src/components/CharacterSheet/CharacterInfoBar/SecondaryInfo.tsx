import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";

const SecondaryInfo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TooltipedTypography title="Eyes">Eyes:</TooltipedTypography>
      <TooltipedTypography title="Hair">Hair:</TooltipedTypography>
      <TooltipedTypography title="Skin">Skin:</TooltipedTypography>
      <TooltipedTypography title="Age">Age:</TooltipedTypography>
      <TooltipedTypography title="Height">Height:</TooltipedTypography>
      <TooltipedTypography title="Weight">Weight:</TooltipedTypography>
    </Box>
  );
};

export default SecondaryInfo;
