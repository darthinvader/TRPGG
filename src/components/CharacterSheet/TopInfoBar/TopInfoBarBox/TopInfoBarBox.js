import { useState } from "react";

const TopInfoBarBox = ({ title, text }) => {
  const [textInfo, setTextInfo] = useState(text);
  return (
    <div>
      <span>{title}</span>
      <input
        type="text"
        value={textInfo}
        onChange={(ev) => setTextInfo(ev.target.value)}
      ></input>
    </div>
  );
};

export default TopInfoBarBox;
