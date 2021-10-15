interface SpeedVal {
  speed: number;
  condition?: string;
}

interface Speed {
  walk?: SpeedVal[];
  burrow?: SpeedVal[];
  climb?: SpeedVal[];
  fly?: SpeedVal[];
  canHover?: boolean[];
  swim?: SpeedVal[];
}

export default Speed;
