import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <div className={styles.NavbarContainer}></div>
      <ul className={styles.Categories}>
        <li className={styles.Category}>
          <Link className={styles.Link} to="/books">
            Books
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
