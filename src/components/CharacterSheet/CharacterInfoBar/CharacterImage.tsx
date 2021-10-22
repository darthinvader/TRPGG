import { Avatar } from "@mui/material";

interface Props {
  imageUrl: string;
}

const CharacterImage: React.FC<Props> = ({ imageUrl }) => {
  return (
    <Avatar
      variant="rounded"
      alt="Character Image"
      src={imageUrl}
      sx={{
        height: 70,
        width: 70,
        border: `2px solid blue`,
      }}
    />
  );
};
export default CharacterImage;
