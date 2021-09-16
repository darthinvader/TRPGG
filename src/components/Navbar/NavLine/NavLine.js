import { useLocation } from "react-router";
import styles from "./NavLine.module.scss";

const NavLine = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname.includes("books")) {
    return <div className={styles.Books}></div>;
  }
  return null;
};

export default NavLine;
