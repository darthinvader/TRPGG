import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { AiFillGoogleCircle } from "react-icons/ai";
import { RiLoader3Fill } from "react-icons/ri";
import { auth, signIn, signOut } from "../../services/firebase-config";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [user, setUser] = useState(auth.currentUser);
  const SignIn = () => {
    setUser("Loading");
    signIn();
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  let userButton = (
    <button className={styles.SignInButton} onClick={SignIn}>
      Sign In With <AiFillGoogleCircle />
    </button>
  );

  if (user) {
    userButton =
      user === "Loading" ? (
        <div className={styles.UserButton}>
          <RiLoader3Fill className={styles.Loading} />
        </div>
      ) : (
        <button className={styles.userButton} onClick={signOut}>
          <img className={styles.Image} src={user.photoURL} alt="user"></img>
        </button>
      );
  }

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
      <ul>
        <li className={styles.UserLi}>{userButton}</li>
      </ul>
    </div>
  );
};

export default Navbar;
