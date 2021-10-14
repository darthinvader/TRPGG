enum RangeType {
  Special = "Special",
  Point = "Point",
  Line = "Line",
  Cube = "Cube",
  Cone = "Cone",
  Radius = "Radius",
  Sphere = "Sphere",
  Hemisphere = "Hemisphere",
  Cylinder = "Cylinder",
}

enum DistanceType {
  feet = "feet",
  miles = "miles",
  self = "self",
  touch = "touch",
  unlimited = "unlimited",
  plane = "plane",
  sight = "sight",
  meters = "meters",
  kilometers = "kilometers",
}

interface Distance {
  type: DistanceType;
  amount: number;
  typeSecondary?: DistanceType;
  amountSecondary?: number;
}

interface Range {
  type: RangeType;
  distance: Distance;
}

export default Range;
