import { useAppStore } from "./store";

const safeExitFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen?.();
  }
};

const enterFullscreen = () => {
  if (document.fullscreenElement || document.webkitFullscreenElement) {
    return;
  }
  const canvas = document.getElementById("canvas");
  if (!canvas) {
    throw new Error("#canvas element was not found");
  }
  return canvas.requestFullscreen?.() || canvas.webkitRequestFullscreen?.();
};

const handleFullscreenChange = () => {
  if (!document.fullscreenElement && !document.webkitFullscreenElement) {
    useAppStore.setState({ mode: "embedded" });
  }
};

const subscribeToAppMode = () => {
  // subscribe document to store event
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
  // update store on browser event
  document.addEventListener("fullscreenchange", handleFullscreenChange);
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
};

export { subscribeToAppMode };
