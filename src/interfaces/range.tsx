enum RangeType {
  Special = "special",
  Point = "point",
  Line = "line",
  Cube = "cube",
  Cone = "cone",
  Radius = "radius",
  Sphere = "sphere",
  Hemisphere = "hemisphere",
  Cylinder = "cylinder",
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
  amount?: number;
  typeSecondary?: DistanceType;
  amountSecondary?: number;
}

interface Range {
  type: RangeType;
  distance: Distance;
}

export default Range;
