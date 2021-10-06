import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import BookCard from "../BookCard/BookCard";

export interface BookProp {
  book: {
    title: string;
    imageUrl: string;
    description: string | undefined;
    downloadLink: string;
  };
}

const Book: React.FC<BookProp> = ({ book }) => {
  return (
    <BookCard>
      <CardActionArea
        href={book.downloadLink}
        target="_blank"
        sx={{ height: "100%" }}
      >
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
    </BookCard>
  );
};

export default Book;
