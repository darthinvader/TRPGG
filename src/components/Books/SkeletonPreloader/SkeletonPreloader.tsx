import { CardContent, Skeleton } from "@mui/material";
import BookCard from "../BookCard/BookCard";

const SkeletonPreloader = () => {
  return (
    <BookCard>
      <Skeleton variant="rectangular" height={225} />
      <CardContent>
        <Skeleton variant="text" height={60} />
        <Skeleton variant="text" height={35} />
      </CardContent>
    </BookCard>
  );
};

export default SkeletonPreloader;
