import { useAppStore } from "src/stores/app/store";

const useIsVR = () => {
  const appMode = useAppStore((state) => state.mode);
  return appMode === "VR";
};

export { useIsVR };
