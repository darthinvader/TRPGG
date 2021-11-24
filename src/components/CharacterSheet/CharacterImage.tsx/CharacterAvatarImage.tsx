import { useCharacter } from "../CharacterContext";

const CharacterAvatarImage: React.FC = () => {
  const { image } = useCharacter();
  const { imageUrl, offset, width, height, scale } = image;
  console.log(offset);
  console.log(scale);
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
          position: "absolute",
          transform: `scale(${scale}) translate(${
            (offset.x - 0.5) * (scale - 1) * 100
          }%, ${(0.5 - offset.y) * (scale - 1) * 100}%)`,
          // left: `${(offset.x - 0.5) * (scale - 1) * 100}%`,
          // top: `${(0.5 - offset.y) * (scale - 1) * 100}%`,
        }}
      ></img>
    </div>
  );
};

export default CharacterAvatarImage;
