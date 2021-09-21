import { useState } from "react";
import styles from "./InfoInput.module.scss";

const InfoInput = ({ placeholder, input, fontSize }) => {
  const [text, setText] = useState(input || "");
  const textWidth = text.length + 2;
  const placeholderWidth = placeholder.length + 2;
  const size = textWidth > placeholderWidth ? textWidth : placeholderWidth;
  return (
    <input
      className={styles.Input}
      type="text"
      value={text}
      onChange={(ev) => setText(ev.target.value)}
      placeholder={placeholder}
      size={size}
      style={{ fontSize }}
    ></input>
  );
};

export default InfoInput;
