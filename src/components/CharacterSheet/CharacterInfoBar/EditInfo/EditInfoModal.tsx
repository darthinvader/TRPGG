import { Dialog, DialogContent, DialogTitle, TextField } from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EditInfoModal: React.FC<Props> = ({ open, onClose }) => {
  // TODO: Races need to be pulled from firebase
  // TODO: Classes need to be pulled from firebase
  // TODO: Backgrounds to be pulled from firebase
  // TODO: Class & Level Need more ui (For multiclassing)
  // TODO: Character Name may have a Generator for help
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ marginBottom: 3 }}>
        Edit Character Information
      </DialogTitle>
      <DialogContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexFlow: "wrap",
            gap: "16px",
            marginTop: "24px",
          }}
        >
          <TextField label="Character Name" />
          <TextField label="Race" />
          <TextField label="Class" />
          <TextField label="Background" />
          <TextField label="Alignment" />
          <TextField label="Eyes" />
          <TextField label="Hair" />
          <TextField label="Skin" />
          <TextField label="Age" />
          <TextField label="Height" />
          <TextField label="Weight" />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditInfoModal;
