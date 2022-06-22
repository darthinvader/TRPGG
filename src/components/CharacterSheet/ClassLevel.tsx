import { Typography } from "@mui/material";

export interface ClassLevelProp {
  info: { class: string; level: number }[];
}

export const ClassLevel = ({ info }: ClassLevelProp) => {
  return (
    <Typography>
      {info
        .map((info) => `${info.class} ${info.level}`)
        .reduce((previousValue, currentValue) => previousValue + currentValue)}
    </Typography>
  );
};

export default ClassLevel;
