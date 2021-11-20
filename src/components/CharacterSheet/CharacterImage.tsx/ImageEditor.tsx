import { Button, Slider } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import AvatarEditor, { Position } from "react-avatar-editor";
import CharacterImage from "../../../interfaces/character/characterImage";
import { useCharacter } from "../CharacterContext";

interface Props {
  newImageUrl: string;
  setImage: (image: CharacterImage) => void;
}

const ImageEditor: React.FC<Props> = ({ newImageUrl, setImage }) => {
  const { image } = useCharacter();

  const [scale, setScale] = useState(image.scale);
  const [width, setWidth] = useState(image.width);
  const [height, setHeight] = useState(image.height);
  const [offset, setOffset] = useState(image.offset);

  const setImageWhole = useCallback(() => {
    setImage({ scale, width, height, offset, imageUrl: newImageUrl });
  }, [setImage, scale, width, height, offset, newImageUrl]);

  useEffect(() => {
    setImageWhole();
  }, [newImageUrl, scale, width, height, offset, setImageWhole]);

  const getPosition = (position: Position) => {
    const offsetX = Math.ceil((position.x - 0.5) * width);
    const offsetY = Math.ceil((position.y - 0.5) * height);
    setOffset({ x: offsetX, y: offsetY });
    console.log(position);
  };

  const handleWidthSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      console.log(newValue);
      setWidth(newValue);
    }
  };

  const handleHeightSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      console.log(newValue);
      setHeight(newValue);
    }
  };

  const handleScaleSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      console.log(newValue);
      setScale(newValue);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <AvatarEditor
        image={newImageUrl}
        height={height}
        width={width}
        border={10}
        color={[255, 255, 255, 0.3]}
        scale={scale}
        onPositionChange={getPosition}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 5,
        }}
      >
        <Slider
          value={width}
          onChange={handleWidthSlideChange}
          aria-labelledby="input-slider"
          step={1}
          min={150}
          max={250}
        />
        <Slider
          value={height}
          onChange={handleHeightSlideChange}
          aria-labelledby="input-slider"
          step={1}
          min={150}
          max={250}
        />
        <Slider
          value={scale}
          onChange={handleScaleSlideChange}
          aria-labelledby="input-slider"
          step={0.1}
          min={1}
          max={10}
        />
        <Button variant="outlined">Best Fit</Button>
      </div>
    </div>
  );
};

export default ImageEditor;
