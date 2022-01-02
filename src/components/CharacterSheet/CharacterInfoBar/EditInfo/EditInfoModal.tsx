import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useCharacter, useCharacterUpdate } from "../../CharacterContext";

interface Props {
  open: boolean;
  onClose: () => void;
  update: () => void;
}

const EditInfoModal: React.FC<Props> = ({ open, onClose, update }) => {
  const character = useCharacter();
  const characterUpdate = useCharacterUpdate();
  // TODO: Races need to be pulled from firebase
  // TODO: Classes need to be pulled from firebase
  // TODO: Backgrounds to be pulled from firebase
  // TODO: Character Name may have a Generator for help
  const { info } = character;
  const [characterName, setCharacterName] = useState(info.name);
  const [race, setRace] = useState(info.race);
  const [background, setBackground] = useState(info.background);
  const [alignment, setAlignment] = useState(info.alignment);
  const [eyes, setEyes] = useState(info.eyes);
  const [hair, setHair] = useState(info.hair);
  const [skin, setSkin] = useState(info.skin);
  const [age, setAge] = useState(info.age);
  const [height, setHeight] = useState(info.height);
  const [weight, setWeight] = useState(info.weight);

  const updateEdit = () => {
    characterUpdate.changeInfo("name", characterName);
    characterUpdate.changeInfo("race", race);
    characterUpdate.changeInfo("background", background);
    characterUpdate.changeInfo("alignment", alignment);
    characterUpdate.changeInfo("eyes", eyes);
    characterUpdate.changeInfo("hair", hair);
    characterUpdate.changeInfo("skin", skin);
    characterUpdate.changeInfo("age", age);
    characterUpdate.changeInfo("height", height);
    characterUpdate.changeInfo("weight", weight);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ marginBottom: 3 }}>
        Edit Character Information
      </DialogTitle>
      <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexFlow: "wrap",
            gap: "16px",
            marginTop: "24px",
            marginBottom: "24px",
          }}
        >
          <TextField
            label="Character Name"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <TextField
            label="Race"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          />
          <TextField
            label="Background"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
          <TextField
            label="Alignment"
            value={alignment}
            onChange={(e) => setAlignment(e.target.value)}
          />
          <TextField
            label="Eyes"
            value={eyes}
            onChange={(e) => setEyes(e.target.value)}
          />
          <TextField
            label="Hair"
            value={hair}
            onChange={(e) => setHair(e.target.value)}
          />
          <TextField
            label="Skin"
            value={skin}
            onChange={(e) => setSkin(e.target.value)}
          />
          <TextField
            label="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <TextField
            label="Weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button
            onClick={() => {
              update();
              updateEdit();
            }}
          >
            Update
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default EditInfoModal;
