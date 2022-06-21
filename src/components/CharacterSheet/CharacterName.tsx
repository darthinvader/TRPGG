import { Typography } from "@mui/material";

export interface CharacterNameProps {
  name?: string;
}

const CharacterName: React.FC<CharacterNameProps> = ({ name }) => {
  return <Typography variant="h5">{name}</Typography>;
};

export default CharacterName;
