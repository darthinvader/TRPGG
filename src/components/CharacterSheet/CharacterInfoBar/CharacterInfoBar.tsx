import BasicInfo from "./BasicInfo";
import CharacterImage from "../CharacterImage/CharacterImage";
import SecondaryInfo from "./SecondaryInfo";
import { Card } from "@mui/material";
import Rests from "./Rests";
import EditInfo from "./EditInfo/EditInfo";
import { Box } from "@mui/system";

const CharacterInfoBar = () => {
  return (
    <div style={{ position: "relative" }}>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: 3,
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <CharacterImage />
          <BasicInfo />
        </Box>
        <SecondaryInfo />
        <Rests />
      </Card>
      <EditInfo />
    </div>
  );
};

export default CharacterInfoBar;
