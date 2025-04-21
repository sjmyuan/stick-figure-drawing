// Define the Point interface for center, start, and end properties
export interface Point {
  x: number;
  y: number;
}

// Define the ELLIPSE interface
export interface Ellipse {
  type: "ELLIPSE";
  center: Point;
  radiusX: number;
  radiusY: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the CIRCLE interface
export interface Circle {
  type: "CIRCLE";
  center: Point;
  radius: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the WEDGE interface
export interface Wedge {
  type: "WEDGE";
  center: Point;
  radius: number;
  startAngle: number;
  endAngle: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the RING interface
export interface Ring {
  type: "RING";
  center: Point;
  innerRadius: number;
  outerRadius: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the ARC interface
export interface Arc {
  type: "ARC";
  center: Point;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  endAngle: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the LINE interface
export interface Line {
  type: "LINE";
  points: Point[];
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the Curve interface
export interface Curve {
  type: "CURVE";
  points: Point[];
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the Arror interface
export interface Arrow {
  type: "ARROW";
  points: Point[];
  pointerLength: number;
  pointerWidth: number;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the RECTANGLE interface
export interface Rectangle {
  type: "RECTANGLE";
  top_left: Point;
  width: number;
  height: number;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the Polygon interface
export interface Polygon {
  type: "POLYGON";
  points: Point[];
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}

// Define the Polygon interface
export interface CurveBoundedRegion {
  type: "CURVE_BOUNDED_REGION";
  points: Point[];
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  description: string;
}
// Define the DrawingElement union type
export type DrawingElement =
  | Ellipse
  | Circle
  | Line
  | Rectangle
  | Polygon
  | Curve
  | Wedge
  | Ring
  | Arc
  | Arrow
  | CurveBoundedRegion;

// Define the Drawing type as an array of DrawingElement
export type Drawing = DrawingElement[];
