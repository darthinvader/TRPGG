import { Button, Slider } from "@mui/material";
import { useState } from "react";
import AvatarEditor, { Position } from "react-avatar-editor";

interface Props {
  newImageUrl: string;
}

const ImageEditor: React.FC<Props> = ({ newImageUrl }) => {
  const [scale, setScale] = useState(1.2);
  const [width, setWidth] = useState(120);
  const [height, setHeight] = useState(150);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getPosition = (position: Position) => {
    setPosition(position);
    // console.log(position.x - 1 / (2 * scale));
    // console.log(position.y - 1 / (2 * scale));
    console.log(position);
  };

  const handleWidthSlideChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    // Make New Value be number
    if (typeof newValue === "number") {
      console.log(newValue);
      setWidth(newValue);
    }
  };

  const handleHeightSlideChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    // Make New Value be number
    if (typeof newValue === "number") {
      console.log(newValue);
      setHeight(newValue);
    }
  };

  const handleScaleSlideChange = (
    event: Event,
    newValue: number | number[]
  ) => {
    // Make New Value be number
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
          min={0}
          max={250}
        />
        <Slider
          value={height}
          onChange={handleHeightSlideChange}
          aria-labelledby="input-slider"
          step={1}
          min={0}
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
