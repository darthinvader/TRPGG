import Tooltip from "@mui/material/Tooltip";
import { Typography, TypographyProps, TooltipProps } from "@mui/material";

interface Props {
  children: React.ReactNode;
  title: string;
  tooltipProps?: Omit<TooltipProps, "children" | "title">;
  typographyProps?: TypographyProps;
}
const TooltipedTypography: React.FC<Props> = ({
  children,
  title,
  tooltipProps,
  typographyProps,
}) => {
  return (
    <Tooltip title={title} {...tooltipProps}>
      <Typography {...typographyProps}>{children}</Typography>
    </Tooltip>
  );
};

export default TooltipedTypography;
