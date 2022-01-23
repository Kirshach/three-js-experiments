import React from "react";
import { Canvas as RegularCanvas } from "@react-three/fiber";
import { VRCanvas } from "@react-three/xr";

import { useIsVR } from "src/hooks/useIsVR";

const Canvas: React.FC = ({ children }) => {
  const isVR = useIsVR();
  const Canvas = isVR ? VRCanvas : RegularCanvas;
  return <Canvas>{children}</Canvas>;
};

export default Canvas;
