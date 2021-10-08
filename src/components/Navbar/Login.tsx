import GoogleIcon from "@mui/icons-material/Google";
import { IconButton, ListItem, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { auth, signIn, signOut } from "../../services/firebase-config";
import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { motion } from "framer-motion";
import { RiLoader3Fill } from "react-icons/ri";

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
      width: 30,
      height: 30,
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
  const theme = useTheme();

  let userButton: JSX.Element;
  if (user) {
    const avatar = user.photoURL ? (
      <Avatar sx={{ width: 30, height: 30 }} src={user.photoURL} alt="user" />
    ) : user.displayName ? (
      <Avatar {...stringAvatar(user.displayName)}></Avatar>
    ) : (
      <AccountCircleIcon sx={{ width: 30, height: 30 }} />
    );
    userButton = (
      <Tooltip title="Sign Out">
        <IconButton onClick={SignOut}>{avatar}</IconButton>
      </Tooltip>
    );
  } else if (loading) {
    userButton = (
      <Tooltip title="Signing In/Loading">
        <motion.div
          style={{ display: "flex", padding: 8 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <RiLoader3Fill size={30}></RiLoader3Fill>
        </motion.div>
      </Tooltip>
    );
  } else {
    userButton = (
      <Tooltip title="Sign In">
        <IconButton onClick={SignIn}>
          <GoogleIcon
            sx={{ color: theme.palette.text.primary, width: 30, height: 30 }}
          ></GoogleIcon>
        </IconButton>
      </Tooltip>
    );
  }
  return <ListItem sx={{ display: "flex" }}>{userButton}</ListItem>;
};
export default Login;
