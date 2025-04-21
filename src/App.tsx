import React, { useEffect, useState } from "react";
import {
  Stage,
  Layer,
  Rect,
  Circle,
  Line,
  Ellipse,
  Wedge,
  Ring,
  Arc,
} from "react-konva";
import { Drawing, DrawingElement, Point } from "./types/drawing";
// Function to fetch and parse drawing data
const fetchDrawingData = async (): Promise<Drawing> => {
  const response = await fetch("/drawing.json");
  const data = await response.json();
  return data.drawing as Drawing;
};

function transformPoints(
  points: Point[],
  width: number,
  height: number
): Point[] {
  const centerX = width / 2;
  const centerY = height / 2;
  return points.map((point) => ({
    x: centerX + point.x,
    y: centerY - point.y,
  }));
}

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
            const top_left = transformPoints(
              [shape.top_left],
              window.innerWidth,
              window.innerHeight
            )[0];
            return (
              <Rect
                key={index}
                x={top_left.x}
                y={top_left.y}
                width={shape.width}
                height={shape.height}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "CIRCLE") {
            const center = transformPoints(
              [shape.center],
              window.innerWidth,
              window.innerHeight
            )[0];
            return (
              <Circle
                key={index}
                x={center.x}
                y={center.y}
                radius={shape.radius}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "RING") {
            const center = transformPoints(
              [shape.center],
              window.innerWidth,
              window.innerHeight
            )[0];
            return (
              <Ring
                key={index}
                x={center.x}
                y={center.y}
                innerRadius={shape.innerRadius}
                outerRadius={shape.outerRadius}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "ARC") {
            const center = transformPoints(
              [shape.center],
              window.innerWidth,
              window.innerHeight
            )[0];
            return (
              <Arc
                key={index}
                x={center.x}
                y={center.y}
                innerRadius={shape.innerRadius}
                outerRadius={shape.outerRadius}
                angle={shape.endAngle - shape.startAngle}
                rotation={shape.startAngle}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "WEDGE") {
            const center = transformPoints(
              [shape.center],
              window.innerWidth,
              window.innerHeight
            )[0];
            return (
              <Wedge
                key={index}
                x={center.x}
                y={center.y}
                radius={shape.radius}
                angle={shape.endAngle - shape.startAngle}
                rotation={shape.startAngle}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "LINE") {
            return (
              <Line
                key={index}
                points={
                  shape.points?.length
                    ? transformPoints(
                        shape.points,
                        window.innerWidth,
                        window.innerHeight
                      ).flatMap((point) => [point.x, point.y])
                    : []
                }
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "CURVE") {
            return (
              <Line
                key={index}
                points={
                  shape.points?.length
                    ? transformPoints(
                        shape.points,
                        window.innerWidth,
                        window.innerHeight
                      ).flatMap((point) => [point.x, point.y])
                    : []
                }
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
                tension={0.5}
              />
            );
          } else if (shape.type === "ARROW") {
            return (
              <Line
                key={index}
                points={
                  shape.points?.length
                    ? transformPoints(
                        shape.points,
                        window.innerWidth,
                        window.innerHeight
                      ).flatMap((point) => [point.x, point.y])
                    : []
                }
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
                tension={0.5}
                pointerLength={shape.pointerLength}
                pointerWidth={shape.pointerWidth}
              />
            );
          } else if (shape.type === "POLYGON") {
            return (
              <Line
                key={index}
                points={
                  shape.points?.length
                    ? transformPoints(
                        shape.points,
                        window.innerWidth,
                        window.innerHeight
                      ).flatMap((point) => [point.x, point.y])
                    : []
                }
                closed
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
              />
            );
          } else if (shape.type === "CURVE_BOUNDED_REGION") {
            return (
              <Line
                key={index}
                points={
                  shape.points?.length
                    ? transformPoints(
                        shape.points,
                        window.innerWidth,
                        window.innerHeight
                      ).flatMap((point) => [point.x, point.y])
                    : []
                }
                closed
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
                tension={0.5}
              />
            );
          } else if (shape.type === "ELLIPSE") {
            const center = transformPoints(
              [shape.center],
              window.innerWidth,
              window.innerHeight
            )[0];
            return (
              <Ellipse
                key={index}
                x={center.x ?? 0}
                y={center.y ?? 0}
                radiusX={shape.radiusX ?? 0}
                radiusY={shape.radiusY ?? 0}
                fill={shape.fillColor}
                stroke={shape.strokeColor}
                strokeWidth={shape.strokeWidth}
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
