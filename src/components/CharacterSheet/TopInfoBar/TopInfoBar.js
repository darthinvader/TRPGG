import TopInfoBarBox from "./TopInfoBarBox/TopInfoBarBox";
import styles from "./TopInfoBar.module.scss";

const TopInfoBar = () => {
  return (
    <div className={styles.Container}>
      <TopInfoBarBox title="Character Name" />
      <TopInfoBarBox title="Character Name" />
      <TopInfoBarBox title="Character Name" />
      <TopInfoBarBox title="Character Name" />
      <TopInfoBarBox title="Character Name" />
      <TopInfoBarBox title="Character Name" />
    </div>
  );
};

export default TopInfoBar;
