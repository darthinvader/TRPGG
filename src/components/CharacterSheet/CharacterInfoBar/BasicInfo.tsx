import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";
import { useCharacter } from "../CharacterContext";

const BasicInfo = () => {
  const character = useCharacter();

  console.log(character);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "subtitle1" }}
        title="Race"
      >
        {character.info.race || "Race"}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "subtitle1" }}
        title="Class & Level"
      >
        {character.classAndLevel === [] || "Class & Level"}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Background"
      >
        {character.info.background || "Background"}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Alignment"
      >
        {character.info.alignment || "Alignment"}
      </TooltipedTypography>
    </Box>
  );
};

export default BasicInfo;
