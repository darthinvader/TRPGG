import { Button, Slider, Typography } from "@mui/material";
import { useEffect, useState, useCallback, useRef } from "react";
import CharacterImage from "../../../interfaces/character/characterImage";
import { useCharacter } from "../CharacterContext";

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
  const [offsetX, setOffsetX] = useState(image.offsetX);
  const [offsetY, setOffsetY] = useState(image.offsetY);

  let maxOffsetX: number;
  let maxOffsetY: number;
  let imageRef = useRef<HTMLImageElement | null>(null);
  if (imageRef && imageRef.current) {
    // Explanation Needed
    // image.current.height is the height of the image
    // height is height of the box that contains the image
    // the maximum offset is calculated as follows height of image minus the height of the box divided by scale divided by two
    // The answer to why that is that way is this
    // Tou have an image that has height bigger than the height of the container and the image is centered and its center is 0,0
    // The upper limit of the image is equal to the height of the image minus the height of the container divided by 2
    // ------------------
    // |                |
    // | ++++++++++++++ |
    // |                |
    // |                |
    // | ++++++++++++++ |
    // |                |
    // ------------------
    // In our case our image has 4 height
    // And the container has 2 height
    // So above there is 1 height
    // And below there is also 1 height (they are the same)
    // Now when scale exists, for some reason translate works like that the image still has the same height (In our case 4)
    // But the container contains less of the picture
    // So if I increased the size of the image by 2 the container is decrease by 2 times
    // So we need to divide the height of the container by 2
    // So we end up with doing height of image - new height of container (container height/scale) divided by 2 because we have upper and lower half
    // Math.max keeps the offsets from going negative (in case of very small images it can happen)
    maxOffsetX = (imageRef.current.width - width / scale) / 2;
    maxOffsetX = Math.max(maxOffsetX, 0);
    maxOffsetY = (imageRef.current.height - height / scale) / 2;
    maxOffsetY = Math.max(maxOffsetY, 0);
    console.log(offsetX);
    console.log(maxOffsetX);

    if (offsetX > maxOffsetX) {
      setOffsetX(maxOffsetX);
    } else if (offsetX < -maxOffsetX) {
      setOffsetX(-maxOffsetX);
    }
    if (offsetY > maxOffsetY) {
      setOffsetY(maxOffsetY);
    } else if (offsetY < -maxOffsetY) {
      setOffsetY(-maxOffsetY);
    }
  } else {
    maxOffsetX = 0;
    maxOffsetY = 0;
  }

  const setImageWhole = useCallback(() => {
    setImage({ scale, width, height, offsetX, offsetY, imageUrl: newImageUrl });
  }, [setImage, scale, width, height, offsetX, offsetY, newImageUrl]);
  useEffect(() => {
    setImageWhole();
  }, [newImageUrl, scale, width, height, offsetX, offsetY, setImageWhole]);

  const handleOffsetXSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setOffsetX(newValue);
    }
  };
  const handleOffsetYSlideChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setOffsetY(newValue);
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "content-box",
          width: `${width}px`,
          height: `${height}px`,
          overflow: "hidden",
          borderRadius: "5px",
          border: "8px solid black",
        }}
      >
        <img
          src={newImageUrl}
          alt="Character Avatar"
          style={{
            width: "100%",
            height: "auto",
            transform: `scale(${scale}) translate(${offsetX}px,${offsetY}px)`,
          }}
          ref={imageRef}
        ></img>
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
        <Slider
          value={offsetX}
          onChange={handleOffsetXSlideChange}
          step={1}
          min={-maxOffsetX}
          max={maxOffsetX}
        />
        <Slider
          value={offsetY}
          onChange={handleOffsetYSlideChange}
          step={1}
          min={-maxOffsetY}
          max={maxOffsetY}
        />
        <Button variant="outlined">Best Fit</Button>
      </div>
    </div>
  );
};

export default ImageEditor;
