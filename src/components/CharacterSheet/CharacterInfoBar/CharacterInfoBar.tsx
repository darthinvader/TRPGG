import BasicInfo from "./BasicInfo";
import CharacterImage from "../CharacterImage.tsx/CharacterImage";
import SecondaryInfo from "./SecondaryInfo";
import EditIcon from "@mui/icons-material/Edit";
import { Card, IconButton } from "@mui/material";

const CharacterInfoBar = () => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", padding: 2 }}>
      <CharacterImage />
      <BasicInfo />
      <SecondaryInfo />
      <IconButton sx={{ flexShrink: 0 }}>
        <EditIcon />
      </IconButton>
    </Card>
  );
};

export default CharacterInfoBar;
