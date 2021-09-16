import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

import Login from "./Login/Login";
const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.Categories}>
        <li>
          <Link className={styles.Link} to="/books">
            Books
          </Link>
        </li>
        <li>
          <Link className={styles.Link} to="/MusicPlayer">
            Music Player
          </Link>
        </li>
        <li>
          <Link className={styles.Link} to="/SoundEffects">
            Sound Effects
          </Link>
        </li>
      </ul>
      <ul style={{ listStyleType: "none" }}>
        <li className={styles.UserLi}>
          <Login />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
