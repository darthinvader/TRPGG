import GoogleIcon from "@mui/icons-material/Google";
import { IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SignInButton: React.FC<{ SignIn: () => void }> = ({ SignIn }) => {
  const theme = useTheme();

  return (
    <Tooltip title="Sign In">
      <IconButton onClick={SignIn}>
        <GoogleIcon
          sx={{ color: theme.palette.text.primary, width: 30, height: 30 }}
        ></GoogleIcon>
      </IconButton>
    </Tooltip>
  );
};

export default SignInButton;
