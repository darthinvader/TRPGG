import CharacterImage from "./CharacterImage";

const CharacterInfoBar = () => {
  return (
    <div>
      <div style={{ gridArea: "image" }}>
        <CharacterImage />
      </div>
    </div>
  );
};

export default CharacterInfoBar;
