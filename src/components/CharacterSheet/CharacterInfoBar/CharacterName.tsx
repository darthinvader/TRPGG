import TooltipedTypography from "../../../utilComponents/TooltipedTypography";
import { useCharacter } from "../CharacterContext";

const CharacterName = () => {
  const character = useCharacter();

  return (
    <TooltipedTypography
      tooltipProps={{ placement: "left", arrow: true }}
      typographyProps={{ variant: "h4" }}
      title="Character Name"
    >
      {character.info.name || "Character Name"}
    </TooltipedTypography>
  );
};

export default CharacterName;
