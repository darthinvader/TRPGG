import BasicInfo from "./BasicInfo";
import CharacterImage from "../CharacterImage/CharacterImage";
import SecondaryInfo from "./SecondaryInfo";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Card, IconButton } from "@mui/material";
import { GiCampfire, GiCampingTent } from "react-icons/gi";
import { Box } from "@mui/system";
const CharacterInfoBar = () => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", padding: 2 }}>
      <CharacterImage />
      <BasicInfo />
      <SecondaryInfo />
      <IconButton>
        <EditIcon />
      </IconButton>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Button size="large" startIcon={<GiCampingTent />}>
          Long rest
        </Button>
        <Button size="large" startIcon={<GiCampfire />}>
          Short rest
        </Button>
      </Box>
    </Card>
  );
};

export default CharacterInfoBar;
