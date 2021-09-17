import { useLocation } from "react-router";
import styles from "./NavLine.module.scss";

const NavLine = () => {
  let { pathname } = useLocation();
  pathname = pathname.toLowerCase();
  if (pathname.includes("books")) {
    return <div className={styles.Books}></div>;
  } else if (pathname.includes("generators"))
    return <div className={styles.Generators}></div>;
  return null;
};

export default NavLine;
