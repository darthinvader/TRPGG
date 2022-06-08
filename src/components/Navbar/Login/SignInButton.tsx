import GoogleIcon from "@mui/icons-material/Google";
import { IconButton, Tooltip } from "@mui/material";
import { styled } from "@mui/system";

const StyledGoogleIcon = styled(GoogleIcon)(({ theme }: any) => ({
  color: theme.palette.text.primary,
  width: 30,
  height: 30,
}));

const SignInButton: React.FC<{ SignIn: () => void }> = ({ SignIn }) => {
  return (
    <Tooltip title="Sign In">
      <IconButton onClick={SignIn}>
        <StyledGoogleIcon />
      </IconButton>
    </Tooltip>
  );
};

export default SignInButton;
