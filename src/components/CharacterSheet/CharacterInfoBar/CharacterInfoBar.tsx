import BasicInfo from "./BasicInfo";
import CharacterImage from "./CharacterImage";

const CharacterInfoBar = () => {
  return (
    <div>
      <div>
        <CharacterImage />
        <BasicInfo />
      </div>
    </div>
  );
};

export default CharacterInfoBar;
