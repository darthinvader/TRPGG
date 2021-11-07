import Tooltip from "@mui/material/Tooltip";
import { Typography, TypographyProps, TooltipProps } from "@mui/material";

interface Props {
  text: string;
  title: string;
  tooltipProps?: Omit<TooltipProps, "children" | "title">;
  typographyProps?: TypographyProps;
}
const TooltipedTypography: React.FC<Props> = ({
  text,
  title,
  tooltipProps,
  typographyProps,
}) => {
  return (
    <Tooltip title={title}  {...tooltipProps}>
      <Typography {...typographyProps}>{text}</Typography>
    </Tooltip>
  );
};

export default TooltipedTypography;
