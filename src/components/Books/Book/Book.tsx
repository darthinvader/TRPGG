import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

interface BookInterface {
  book: {
    title: string;
    imageUrl: string;
    description: string | undefined;
    downloadLink: string;
  };
}

const Book: React.FC<BookInterface> = ({ book }) => {
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
      <CardActionArea href={book.downloadLink} target="_blank">
        <CardMedia
          component="img"
          image={book.imageUrl}
          alt={`${book.title}Cover`}
        />
        <CardContent>
          <Typography variant="h6" align="center">
            {book.title}
          </Typography>
          <Typography paragraph align="center">
            {book.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Book;
