import { useState } from "react";

const TopInfoBarBox = ({ tooltip, text }) => {
  const [textInfo, setTextInfo] = useState(text);
  return (
    <div>
      <span>{textInfo}</span>
      <input type="text"></input>
    </div>
  );
};
