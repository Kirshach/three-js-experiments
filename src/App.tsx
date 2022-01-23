import Box from "src/components/Box";

import { withCanvas } from "src/hocs/withCanvas";

const App: React.FC = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </>
  );
};

export default withCanvas(App);
