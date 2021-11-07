import Tooltip from "@mui/material/Tooltip";
import { Typography } from "@mui/material";

interface Props {
  text: string;
  title: string;
}
const TooltipedTypography: React.FC<Props> = ({ text, title }) => {
  return (
    <Tooltip title={title}>
      <Typography>{text}</Typography>
    </Tooltip>
  );
};

export default TooltipedTypography;
