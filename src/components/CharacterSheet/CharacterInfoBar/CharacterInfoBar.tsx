import BasicInfo from "./BasicInfo";
import CharacterImage from "../CharacterImage/CharacterImage";
import SecondaryInfo from "./SecondaryInfo";
import { Card } from "@mui/material";
import Rests from "./Rests";
import EditInfo from "./EditInfo";

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
          backgroundColor: "theme.palette.background.paper",
        }}
      >
        <CharacterImage />
        <BasicInfo />
        <SecondaryInfo />
        <Rests />
      </Card>
      <EditInfo />
    </div>
  );
};

export default CharacterInfoBar;
