import { Card, CardContent, Skeleton } from "@mui/material";

const SkeletonPreloader = () => {
  return (
    <Card sx={{ width: 300 }}>
      <CardContent>
        <Skeleton variant="rectangular" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </CardContent>
    </Card>
  );
};

export default SkeletonPreloader;
