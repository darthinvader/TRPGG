import { useCharacter } from "../CharacterContext";

const CharacterAvatarImage: React.FC = () => {
  const { image } = useCharacter();
  const { imageUrl, offset, width, height, scale } = image;
  return (
    <div
      style={{
        position: "relative",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
      }}
    >
      <img
        src={imageUrl}
        alt="Character Avatar"
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          transform: `scale(${scale})`,
          top: `${offset.y}px`,
          right: `${offset.x}px`,
        }}
      ></img>
    </div>
  );
};

export default CharacterAvatarImage;
