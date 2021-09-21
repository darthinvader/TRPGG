import InfoInput from "./InfoInput/InfoInput";
import styles from "./TopInfoBarBox.module.scss";

const TopInfoBarBox = () => {
  return (
    <div className={styles.Container}>
      <InfoInput placeholder="Character Name" fontSize="2.2rem" />
      <InfoInput placeholder="Race" fontSize="2rem" />
      <InfoInput placeholder="Age" fontSize="1.8rem" />
      <InfoInput placeholder="Gender" fontSize="1.8rem" />
      <InfoInput placeholder="Class & Level" fontSize="2.2rem" />
    </div>
  );
};

export default TopInfoBarBox;
