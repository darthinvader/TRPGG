import CharacterNameInfo from "./NameInfo/CharacterNameInfo";
import styles from "./TopInfoBarBox.module.scss";

const TopInfoBarBox = () => {
  return (
    <div className={styles.Container}>
      <CharacterNameInfo />
    </div>
  );
};

export default TopInfoBarBox;
