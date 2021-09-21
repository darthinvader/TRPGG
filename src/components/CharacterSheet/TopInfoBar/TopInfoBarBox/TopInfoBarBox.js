import CharacterNameInfo from "./CharacterNameInfo/CharacterNameInfo";
import styles from "./TopInfoBarBox.module.scss";

const TopInfoBarBox = () => {
  return (
    <div className={styles.Container}>
      <CharacterNameInfo />
    </div>
  );
};

export default TopInfoBarBox;
