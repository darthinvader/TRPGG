import { Card } from "@mui/material";
import { motion } from "framer-motion";

const BookCard: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <Card
      variant="outlined"
      sx={{ boxShadow: 6 }}
      component={motion.div}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.4 },
      }}
    >
      {props.children}
    </Card>
  );
};

export default BookCard;
