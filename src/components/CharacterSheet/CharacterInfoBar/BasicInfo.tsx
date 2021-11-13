import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";

const BasicInfo = () => {
  return (
    <Box>
      <TooltipedTypography title="Character Name">
        Character Name
      </TooltipedTypography>
      <TooltipedTypography title="Race">Race</TooltipedTypography>
      <TooltipedTypography title="Class & Level">
        Class/XX | Class/XX | Class/XX
      </TooltipedTypography>
      <TooltipedTypography title="Total Levels">Level XX</TooltipedTypography>
      <TooltipedTypography title="Background">Background</TooltipedTypography>
      <TooltipedTypography title="Alignment">Alignment</TooltipedTypography>
    </Box>
  );
};

export default BasicInfo;
