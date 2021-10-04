import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

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
    <Card sx={{}}>
      <CardActionArea href={book.downloadLink} target="_blank">
        <CardContent>
          <CardMedia
            component="img"
            image={book.imageUrl}
            alt={`${book.title}Cover`}
          />
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
