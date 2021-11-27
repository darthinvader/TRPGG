import { useCharacter } from "../CharacterContext";

const CharacterAvatarImage: React.FC = () => {
  const { image } = useCharacter();
  const { imageUrl, offsetX, offsetY, width, height, scale } = image;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `${width}px`,
        height: `${height}px`,
        overflow: "hidden",
        boxSizing: "content-box",
        borderRadius: "5px",
        border: "8px solid black",
      }}
    >
      <img
        src={imageUrl}
        alt="Character Avatar"
        style={{
          width: "100%",
          height: "auto",
          transform: `scale(${scale}) translate(${offsetX}px,${offsetY}px)`,
        }}
      ></img>
    </div>
  );
};

export default CharacterAvatarImage;
