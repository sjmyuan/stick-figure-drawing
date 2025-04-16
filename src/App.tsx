import React, { useEffect, useState } from "react";
import { Stage, Layer, Rect, Circle, Line, Ellipse } from "react-konva";
import { Drawing, DrawingElement } from "./types/drawing";
// Function to fetch and parse drawing data
const fetchDrawingData = async (): Promise<Drawing> => {
  const response = await fetch('/drawing.json');
  const data = await response.json();
  return data.drawing as Drawing;
};

const App = () => {
  const [drawing, setDrawing] = useState<Drawing>([]);

  useEffect(() => {
    fetchDrawingData().then(setDrawing);
  }, []);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {drawing.map((shape: DrawingElement, index: number) => {
          if (shape.type === "RECTANGLE") {
            return (
              <Rect
                key={index}
                x={shape.top_left?.x}
                y={shape.top_left?.y}
                width={shape.width}
                height={shape.height}
                stroke={"black"}
                strokeWidth={1}
              />
            );
          } else if (shape.type === "CIRCLE") {
            return (
              <Circle
                key={index}
                x={shape.center?.x}
                y={shape.center?.y}
                radius={shape.radius}
                stroke={"black"}
                strokeWidth={1}
              />
            );
          } else if (shape.type === "LINE") {
            return (
              <Line
                key={index}
                points={[
                  shape.start?.x ?? 0,
                  shape.start?.y ?? 0,
                  shape.end?.x ?? 0,
                  shape.end?.y ?? 0,
                ]}
                stroke={"black"}
                strokeWidth={1}
              />
            );
          } else if (shape.type === "ELLIPSE") {
            return (
              <Ellipse
                key={index}
                x={shape.center?.x ?? 0}
                y={shape.center?.y ?? 0}
                radiusX={shape.radiusX ?? 0}
                radiusY={shape.radiusY ?? 0}
                stroke={"black"}
                strokeWidth={1}
              />
            );
          }
          return null;
        })}
      </Layer>
    </Stage>
  );
};

export default App;
