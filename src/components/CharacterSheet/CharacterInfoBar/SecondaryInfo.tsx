import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";

const SecondaryInfo = () => {
  return (
    <Box sx={{ display: "grid" }}>
      <TooltipedTypography
        title="Eyes"
        tooltipProps={{ placement: "left", arrow: true }}
      >
        Eyes
      </TooltipedTypography>
      <TooltipedTypography title="Hair">Hair</TooltipedTypography>
      <TooltipedTypography title="Skin">Skin</TooltipedTypography>
      <TooltipedTypography title="Age">Age</TooltipedTypography>
      <TooltipedTypography title="Height">Height</TooltipedTypography>
      <TooltipedTypography title="Weight">Weight</TooltipedTypography>
    </Box>
  );
};

export default SecondaryInfo;
