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
    description: string;
}

// Define the CIRCLE interface
export interface Circle {
    type: "CIRCLE";
    center: Point;
    radius: number;
    description: string;
}

// Define the LINE interface
export interface Line {
    type: "LINE";
    start: Point;
    end: Point;
    description: string;
}

// Define the RECTANGLE interface
export interface Rectangle {
    type: "RECTANGLE";
    top_left: Point;
    width: number;
    height: number;
    description: string;
}
// Define the DrawingElement union type
export type DrawingElement = Ellipse | Circle | Line | Rectangle;

// Define the Drawing type as an array of DrawingElement
export type Drawing = DrawingElement[];
