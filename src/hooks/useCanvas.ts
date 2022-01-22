import { Canvas } from "@react-three/fiber";
import { VRCanvas } from "@react-three/xr";

import { useIsVR } from "./useIsVR";

const useCanvas = () => {
  const isVR = useIsVR();
  return isVR ? VRCanvas : Canvas;
};

export { useCanvas };
