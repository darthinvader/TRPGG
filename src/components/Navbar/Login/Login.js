import { AiFillGoogleCircle } from "react-icons/ai";
import { RiLoader3Fill } from "react-icons/ri";
import { auth, signIn, signOut } from "../../../services/firebase-config";
import { useEffect, useState } from "react";
import styles from "./Login.module.scss";
const Login = () => {
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
    <button className={styles.UserButton} onClick={SignIn}>
      Sign In With <AiFillGoogleCircle className={styles.Icon} />
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
  return <div>{userButton}</div>;
};

export default Login;
