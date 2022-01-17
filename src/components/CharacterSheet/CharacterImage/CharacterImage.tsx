import {
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
import CharacterAvatarImage from "./CharacterAvatarImage";

const CharacterImage = () => {
  const character = useCharacter();
  const { imageUrl } = character.image;
  const { changeImage } = useCharacterUpdate();
  const [newImageUrl, setNewImageUrlValue] = useState(imageUrl);
  const [image, setImage] = useState(character.image);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let avatar: JSX.Element;
  if (imageUrl === "") {
    avatar = (
      <Button onClick={handleOpen} sx={{ borderRadius: "50%" }}>
        <AddPhotoAlternateIcon sx={{ height: 80, width: 80 }} />
      </Button>
    );
  } else {
    avatar = (
      <div
        style={{
          cursor: "pointer",
          overflow: "auto",
        }}
        onClick={handleOpen}
      >
        <CharacterAvatarImage />
      </div>
    );
  }
  return (
    <>
      {avatar}
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
          {newImageUrl ? (
            <ImageEditor newImageUrl={newImageUrl} setImage={setImage} />
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              changeImage(image);
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
