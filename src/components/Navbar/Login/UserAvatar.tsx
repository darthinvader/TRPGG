import { User } from "firebase/auth";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/system";

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

const StyledAvatar = styled(Avatar)({ width: 30, height: 30 });

const StyledAccountCircleIcon = styled(AccountCircleIcon)({
  width: 30,
  height: 30,
});

const UserAvatar: React.FC<{ user: User; SignOut: () => void }> = ({
  user,
  SignOut,
}) => {
  const userAvatar = user.photoURL ? (
    <StyledAvatar src={user.photoURL} alt="user" />
  ) : user.displayName ? (
    <Avatar {...stringAvatar(user.displayName)}></Avatar>
  ) : (
    <StyledAccountCircleIcon />
  );

  return (
    <Tooltip title="Sign Out">
      <IconButton onClick={SignOut}>{userAvatar}</IconButton>
    </Tooltip>
  );
};
export default UserAvatar;
