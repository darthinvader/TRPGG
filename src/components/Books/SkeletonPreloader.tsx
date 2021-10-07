import { CardContent, Skeleton } from "@mui/material";
import BookCard from "./BookCard";

const SkeletonPreloader = () => {
  return (
    <BookCard>
      <Skeleton variant="rectangular" height={274} />
      <CardContent>
        <Skeleton variant="text" height={96} />
        <Skeleton variant="text" height={24} />
      </CardContent>
    </BookCard>
  );
};

export default SkeletonPreloader;
