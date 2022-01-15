import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

import { useIsVR } from "hooks/useIsVR";

const App = () => {
  const vr = useIsVR();
  return (
    <Canvas vr={vr}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default App;
