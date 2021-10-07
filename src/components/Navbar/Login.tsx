import GoogleIcon from "@mui/icons-material/Google";
import { IconButton, ListItem } from "@mui/material";
import { useTheme } from "@emotion/react";
import { auth, signIn, signOut } from "../../services/firebase-config";
import LoopIcon from "@mui/icons-material/Loop";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { motion } from "framer-motion";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Login = () => {
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(false);
  const SignIn = () => {
    setLoading(true);
    signIn();
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
  const theme: any = useTheme(); //TODO change theme from any to theme (right now theme doesn't work because interface is empty)
  console.log(user);
  let userButton: JSX.Element;
  if (user) {
    const avatar = user.photoURL ? (
      <Avatar src={user.photoURL} alt="user" />
    ) : user.displayName ? (
      <Avatar {...stringAvatar(user.displayName)}></Avatar>
    ) : (
      <AccountCircleIcon />
    );
    userButton = <IconButton onClick={SignOut}>{avatar}</IconButton>;
  } else if (loading) {
    userButton = (
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2 }}>
        <LoopIcon></LoopIcon>
      </motion.div>
    );
  } else {
    userButton = (
      <IconButton sx={{ color: theme.palette.text.primary }} onClick={SignIn}>
        <GoogleIcon></GoogleIcon>
      </IconButton>
    );
  }
  return <ListItem>{userButton}</ListItem>;
};
export default Login;