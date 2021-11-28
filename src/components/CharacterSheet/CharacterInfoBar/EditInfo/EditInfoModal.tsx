import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EditInfoModal: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Character Information</DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexFlow: "wrap",
        }}
      >
        <TextField label="Character Name" />
        <TextField label="Race" />
        <TextField label="Class" />
        <TextField label="Level" />
        <TextField label="Background" />
        <TextField label="Alignment" />
        <TextField label="Eyes" />
        <TextField label="Hair" />
        <TextField label="Skin" />
        <TextField label="Age" />
        <TextField label="Height" />
        <TextField label="Weight" />
      </DialogContent>
    </Dialog>
  );
};

export default EditInfoModal;
