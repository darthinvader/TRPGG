import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { RiLoader3Fill } from "react-icons/ri";

const LoadingUser = () => (
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

export default LoadingUser;
