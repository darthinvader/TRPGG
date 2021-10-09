import { ListItem } from "@mui/material";
import { auth, signIn, signOut } from "../../../services/firebase-config";
import { useEffect, useState } from "react";
import UserAvatar from "./UserAvatar";
import LoadingUser from "./LoadingUser";
import SignInButton from "./SignInButton";

const Login = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(false);

  const SignIn = () => {
    setLoading(true);
    const didSignIn = signIn();
    didSignIn.then((k) => {
      if (!k) {
        setLoading(false);
      }
    });
  };

  const SignOut = () => {
    setLoading(false);
    signOut();
  };

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  let userButton: JSX.Element;
  if (user) {
    userButton = <UserAvatar user={user} SignOut={SignOut} />;
  } else if (loading) {
    userButton = <LoadingUser />;
  } else {
    userButton = <SignInButton SignIn={SignIn} />;
  }
  return <ListItem sx={{ display: "flex" }}>{userButton}</ListItem>;
};
export default Login;
