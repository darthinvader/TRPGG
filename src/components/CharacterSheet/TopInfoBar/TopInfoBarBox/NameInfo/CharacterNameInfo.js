import { useState } from "react";
import styles from "./CharacterNameInfo.module.scss";

const CharacterNameInfo = ({ CharacterName }) => {
  const [name, setName] = useState(CharacterName || "");
  const size = name.length > 13 ? name.length : 13;

  return (
    <input
      className={styles.Input}
      type="text"
      value={name}
      onChange={(ev) => setName(ev.target.value)}
      placeholder={"Character Name"}
      size={size}
    ></input>
  );
};

export default CharacterNameInfo;
