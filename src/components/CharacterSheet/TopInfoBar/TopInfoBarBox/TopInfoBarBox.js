import { useState } from "react";
import styles from "./TopInfoBarBox.module.scss";

const TopInfoBarBox = ({ title, text }) => {
  const [textInfo, setTextInfo] = useState(text || "");
  return (
    <div className={styles.Container}>
      <input
        className={styles.Input}
        type="text"
        value={textInfo}
        onChange={(ev) => setTextInfo(ev.target.value)}
        placeholder={title}
      ></input>
      <span className={styles.Title}>{title}</span>
    </div>
  );
};

export default TopInfoBarBox;
