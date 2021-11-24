import { Button, Slider, Typography } from "@mui/material";
import { useEffect, useState, useCallback } from "react";
import AvatarEditor, { Position } from "react-avatar-editor";
import CharacterImage from "../../../interfaces/character/characterImage";
import { useCharacter } from "../CharacterContext";
import Draggable from "react-draggable";

interface Props {
  newImageUrl: string;
  setImage: (image: CharacterImage) => void;
}

const ImageEditor: React.FC<Props> = ({ newImageUrl, setImage }) => {
  // Create it with draggable (Maybe we will be able to use it then)
  const { image } = useCharacter();

  const [scale, setScale] = useState(image.scale);
  const [width, setWidth] = useState(image.width);
  const [height, setHeight] = useState(image.height);
  const [offset, setOffset] = useState(image.offset);
  const [ref, setRef] = useState<AvatarEditor | null>(null);
  const setImageWhole = useCallback(() => {
    setImage({ scale, width, height, offset, imageUrl: newImageUrl });
  }, [setImage, scale, width, height, offset, newImageUrl]);
  useEffect(() => {
    setImageWhole();
  }, [newImageUrl, scale, width, height, offset, setImageWhole]);

  const getPosition = (position: Position) => {
    if (ref) {
      const { x, y } = ref.getCroppingRect();
      setOffset({ x, y });
    } else {
      setOffset({ x: 0.5, y: 0.5 });
    }
  };

  const handleWidthSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setWidth(newValue);
    }
  };

  const handleHeightSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setHeight(newValue);
    }
  };

  const handleScaleSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setScale(newValue);
    }
  };

  return (
    <div style={{ paddingBottom: "16px" }}>
      <div style={{ width: "250px" }}>
        <div
          style={{
            position: "relative",
            width: `${width}px`,
            height: `${height}px`,
            overflow: "hidden",
            border: "8px solid rgba(0,0,0,0.5)",
          }}
        >
          <img
            src={newImageUrl}
            alt="Character Avatar"
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
              transform: `scale(${scale})`,
            }}
          ></img>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Typography id="input-slider" gutterBottom>
          Volume
        </Typography>
        <Slider
          value={width}
          onChange={handleWidthSlideChange}
          aria-labelledby="input-slider"
          step={1}
          min={150}
          max={250}
          valueLabelDisplay="auto"
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
        {/* <Slider
          value={scale}
          onChange={handleScaleSlideChange}
          aria-labelledby="input-slider"
          step={scale}
          min={1}
          max={10}
        />
        <Slider
          value={scale}
          onChange={handleScaleSlideChange}
          aria-labelledby="input-slider"
          step={scale}
          min={1}
          max={10}
        /> */}
        <Button variant="outlined">Best Fit</Button>
      </div>
    </div>
  );
};

export default ImageEditor;
