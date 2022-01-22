import Box from "src/components/Box";

import { useCanvas } from "src/hooks/useCanvas";

const App = () => {
  const Canvas = useCanvas();
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default App;
