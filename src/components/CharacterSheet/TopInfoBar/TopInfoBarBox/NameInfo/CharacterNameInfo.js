import { useState } from "react";
import styles from "./CharacterNameInfo.module.scss";

const CharacterNameInfo = ({ CharacterName }) => {
  const [name, setName] = useState(CharacterName || "");
  const nameWidth = name.length + 2;
  const size = nameWidth > 13 ? nameWidth : 13;
  return (
    <input
      className={styles.Input}
      type="text"
      value={name}
      onChange={(ev) => setName(ev.target.value)}
      placeholder={"Character Names"}
      size={size}
    ></input>
  );
};

export default CharacterNameInfo;
