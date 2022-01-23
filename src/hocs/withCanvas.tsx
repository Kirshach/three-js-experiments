import React from "react";
import { Canvas as RegularCanvas } from "@react-three/fiber";
import { VRCanvas } from "@react-three/xr";

import { useIsVR } from "src/hooks/useIsVR";

const withCanvas =
  (Component: React.ComponentType): React.FC =>
  (props) => {
    const isVR = useIsVR();
    const Canvas = isVR ? VRCanvas : RegularCanvas;
    return (
      <Canvas>
        <Component {...props} />
      </Canvas>
    );
  };

export { withCanvas };
