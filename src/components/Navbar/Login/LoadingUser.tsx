import { Tooltip } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { RiLoader3Fill } from "react-icons/ri";

const StyledMotionDiv = styled(motion.div)({
  display: "flex",
  padding: 8,
});

const LoadingUser = () => (
  <Tooltip title="Signing In/Loading">
    <StyledMotionDiv
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <RiLoader3Fill size={30}></RiLoader3Fill>
    </StyledMotionDiv>
  </Tooltip>
);

export default LoadingUser;
