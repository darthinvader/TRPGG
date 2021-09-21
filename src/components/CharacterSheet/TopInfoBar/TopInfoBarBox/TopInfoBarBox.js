import InfoInput from "./InfoInput/InfoInput";
import styles from "./TopInfoBarBox.module.scss";

const TopInfoBarBox = () => {
  return (
    <div className={styles.Container}>
      <InfoInput placeholder="Character Name" fontSize="2.2rem" />
      <InfoInput placeholder="Race" fontSize="1.8rem" />
    </div>
  );
};

export default TopInfoBarBox;
