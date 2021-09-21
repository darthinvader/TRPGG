import styles from "./TopInfoBar.module.scss";
import InfoInput from "./TopInfoBarBox/InfoInput/InfoInput";

const TopInfoBar = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Basics}>
        <InfoInput placeholder="Character Name" fontSize="2.2rem" />
        <InfoInput placeholder="Class & Level" fontSize="2.2rem" />
        <InfoInput placeholder="Race" fontSize="1.8rem" />
      </div>
      <div className={styles.Secondary}>
        <InfoInput placeholder="Age" fontSize="1.8rem" />
        <InfoInput placeholder="Gender" fontSize="1.8rem" />
        <InfoInput placeholder="Height" fontSize="1.8rem" />
        <InfoInput placeholder="Weight" fontSize="1.8rem" />
        <InfoInput placeholder="Eyes" fontSize="1.8rem" />
        <InfoInput placeholder="Skin" fontSize="1.8rem" />
        <InfoInput placeholder="Hair" fontSize="1.8rem" />
      </div>
    </div>
  );
};

export default TopInfoBar;
