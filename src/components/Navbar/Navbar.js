import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FcGoogle } from "react-icons/fc";
import { auth, signIn } from "../../services/firebase-config";
import { useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState(auth.currentUser);
  auth.onAuthStateChanged((user) => {
    setUser(user);
  });

  const userButton = user ? (
    <button className={styles.userButton}>
      <img src={user.photoURL} alt="user"></img>
    </button>
  ) : (
    <button className={styles.userButton} onClick={signIn}>
      Sign In <FcGoogle></FcGoogle>
    </button>
  );

  return (
    <div className={styles.Navbar}>
      <ul className={styles.Categories}>
        <li className={styles.Category}>
          <Link className={styles.Link} to="/books">
            Books
          </Link>
        </li>
        <li className={styles.Category}>
          <Link className={styles.Link} to="/MusicPlayer">
            Music Player
          </Link>
        </li>
        <li className={styles.Category}>
          <Link className={styles.Link} to="/SoundEffects">
            Sound Effects
          </Link>
        </li>
        <li className={styles.Category}>{userButton}</li>
      </ul>
    </div>
  );
};

export default Navbar;
