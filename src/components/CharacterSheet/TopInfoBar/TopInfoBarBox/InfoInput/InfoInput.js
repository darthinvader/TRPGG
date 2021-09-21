import { useState } from "react";
import styles from "./InfoInput.module.scss";
import { ImUnlocked, ImLock } from "react-icons/im";
const InfoInput = ({ placeholder, input, fontSize, color }) => {
  const [text, setText] = useState(input || "");
  const [lock, setLock] = useState(true);
  const textWidth = text.length + 2;
  const placeholderWidth = placeholder.length + 2;
  const size = textWidth > placeholderWidth ? textWidth : placeholderWidth;
  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
        placeholder={placeholder}
        size={size}
        style={{ fontSize, color }}
        disabled={lock}
      ></input>
      {lock ? (
        <ImLock
          style={{ fontSize }}
          className={styles.Lock}
          onClick={() => {
            setLock(!lock);
          }}
        />
      ) : (
        <ImUnlocked
          style={{ fontSize }}
          className={styles.Lock}
          onClick={() => {
            setLock(!lock);
          }}
        />
      )}
    </div>
  );
};

export default InfoInput;
