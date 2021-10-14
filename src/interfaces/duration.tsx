enum DurationType {
  Instant = "instant",
  Timed = "timed",
  Permanent = "permanent",
  Special = "special",
}

enum DurationInterval {
  Hour = "hour",
  Minute = "minute",
  Turn = "turn",
  Round = "round",
  Week = "week",
  Day = "day",
  Year = "year",
}

enum Ending {
  Dispel = "dispel",
  Trigger = "trigger",
  Discharge = "discharge",
}

interface Duration {
  type: DurationType;
  concentration: boolean;
  durationInterval?: DurationInterval;
  amount?: number;
  upTo?: boolean;
  ends?: Ending[];
  condition?: string;
}

export default Duration;
