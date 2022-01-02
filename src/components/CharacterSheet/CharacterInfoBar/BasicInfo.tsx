import { Box } from "@mui/system";
import TooltipedTypography from "../../../utilComponents/TooltipedTypography";
import { useCharacter } from "../CharacterContext";

const BasicInfo = () => {
  const character = useCharacter();
  const totalLevels = character.classAndLevel
    .map((cal) => cal.level)
    .reduce((prev, next) => prev + next, 0);

  console.log(character);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "h4" }}
        title="Character Name"
      >
        {character.info.name}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "subtitle1" }}
        title="Race"
      >
        {character.info.race}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        typographyProps={{ variant: "subtitle1" }}
        title="Class & Level"
      >
        {character.classAndLevel}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Total Levels"
      >
        {totalLevels}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Background"
      >
        {character.info.background}
      </TooltipedTypography>
      <TooltipedTypography
        tooltipProps={{ placement: "left", arrow: true }}
        title="Alignment"
      >
        {character.info.alignment}
      </TooltipedTypography>
    </Box>
  );
};

export default BasicInfo;
