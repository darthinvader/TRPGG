import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.Category}>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
