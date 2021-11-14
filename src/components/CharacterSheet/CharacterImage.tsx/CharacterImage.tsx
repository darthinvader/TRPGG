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
import ImageEditor from "./ImageEditor";

const CharacterImage = () => {
  const character = useCharacter();
  const { changeInfo } = useCharacterUpdate();
  const imageUrl = character.info.imageUrl;

  const [open, setOpen] = useState(false);
  const [newImageUrl, setNewImageUrlValue] = useState(imageUrl);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let image: JSX.Element;
  if (imageUrl === "") {
    image = (
      <Button sx={{ border: `2px solid blue` }} onClick={handleOpen}>
        <AddPhotoAlternateIcon sx={{ height: 150, width: 120 }} />
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
          width: 120,
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
            value={newImageUrl}
            onChange={(e) => setNewImageUrlValue(e.target.value)}
          />
          {newImageUrl ? <ImageEditor newImageUrl={newImageUrl} /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              changeInfo("imageUrl", newImageUrl);
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
