import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useCharacter, useCharacterUpdate } from "../CharacterContext";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useState } from "react";
const CharacterImage = () => {
  const [open, setOpen] = useState(false);
  const [imageUrlValue, setImageUrlValue] = useState("");
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const character = useCharacter();
  const { changeInfo } = useCharacterUpdate();
  const imageUrl = character.info.imageUrl;

  let image: JSX.Element;
  if (imageUrl === "") {
    image = (
      <Button sx={{ border: `2px solid blue` }} onClick={handleOpen}>
        <AddPhotoAlternateIcon sx={{ width: 150, height: 150 }} />
      </Button>
    );
  } else {
    image = (
      <Avatar
        variant="rounded"
        alt="Character Image"
        src={imageUrl}
        sx={{
          height: 150,
          width: 150,
          border: `2px solid blue`,
          cursor: "pointer",
        }}
        onClick={handleOpen}
      />
    );
  }
  return (
    <>
      {image}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the image of your character. You must add a url. If the link
            does not work a default image will appear. You can always change the
            image later.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="imageUrl"
            label="Image Url"
            type="text"
            fullWidth
            variant="standard"
            value={imageUrlValue}
            onChange={(e) => setImageUrlValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              changeInfo("imageUrl", imageUrlValue);
              handleClose();
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default CharacterImage;
