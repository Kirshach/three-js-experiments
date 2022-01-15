import { useAppStore } from "./store";

const safeExitFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen?.();
  }
};

const enterFullscreen = () => {
  const canvas = document.getElementById("canvas");
  if (!canvas) {
    throw new Error("#canvas element was not found");
  }
  return canvas.requestFullscreen?.() || canvas.webkitRequestFullscreen?.();
};

const subscribeToAppMode = () => {
  useAppStore.subscribe(
    (state) => state.mode,
    (mode) => {
      switch (mode) {
        case "fullscreen":
          enterFullscreen();
          break;
        case "VR":
          safeExitFullscreen();
          break;
        case "embedded":
          safeExitFullscreen();
          break;
        default:
          throw new Error("Unhandled mode change");
      }
    }
  );
};

export { subscribeToAppMode };
