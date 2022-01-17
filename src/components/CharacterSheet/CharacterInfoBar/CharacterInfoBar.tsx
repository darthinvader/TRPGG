import BasicInfo from "./BasicInfo";
import CharacterImage from "../CharacterImage/CharacterImage";
import { Card } from "@mui/material";
import Rests from "./Rests";
import EditInfo from "./EditInfo/EditInfo";
import CharacterName from "./CharacterName";

const CharacterInfoBar = () => {
  return (
    <div style={{ position: "relative" }}>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <div style={{ justifySelf: "center", alignSelf: "center" }}>
          <CharacterName />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr 1fr",

            gap: "16px 16px",
            alignItems: "center",
            padding: "10px 60px 10px 20px",
          }}
        >
          <CharacterImage />
          <BasicInfo />
          <Rests />
        </div>
      </Card>
      <EditInfo />
    </div>
  );
};

export default CharacterInfoBar;
