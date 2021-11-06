import BasicInfo from "./BasicInfo";
import CharacterImage from "./CharacterImage";
import SecondaryInfo from "./SecondaryInfo";
import EditIcon from "@mui/icons-material/Edit";

const CharacterInfoBar = () => {
  return (
    <div>
      <div>
        <CharacterImage />
        <BasicInfo />
        <SecondaryInfo />
        <EditIcon />
      </div>
    </div>
  );
};

export default CharacterInfoBar;
