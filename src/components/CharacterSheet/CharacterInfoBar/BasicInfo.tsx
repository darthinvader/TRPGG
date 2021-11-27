import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";

const BasicInfo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginLeft: 1 }}>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "h5" }}
        title="Character Name"
      >
        Character Name:
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "h6" }}
        title="Race"
      >
        Race:
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "bottom", arrow: true }}
        typographyProps={{ variant: "h6" }}
        title="Class & Level"
      >
        Class/Level:
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Total Levels"
      >
        Level:
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Background"
      >
        Background:
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Alignment"
      >
        Alignment:
      </TooltipedTypography>
    </Box>
  );
};

export default BasicInfo;
