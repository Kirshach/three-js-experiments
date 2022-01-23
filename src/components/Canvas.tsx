import React from "react";
import { Canvas as RegularCanvas } from "@react-three/fiber";
import { VRCanvas } from "@react-three/xr";

const Canvas: React.FC = ({ children }) => {
  // TODO: add XR typing to navigator
  const Canvas = (window.navigator as any).xr ? VRCanvas : RegularCanvas;
  return <Canvas>{children}</Canvas>;
};

export default Canvas;
