import create, { GetState, SetState } from "zustand";
import {
  StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from "zustand/middleware";

type AppMode = "VR" | "embedded" | "fullscreen";

interface AppState {
  mode: AppMode;
}

interface AppStore extends AppState {
  setMode: (mode: AppMode) => void;
}

const useAppStore = create<
  AppStore,
  SetState<AppStore>,
  GetState<AppStore>,
  StoreApiWithSubscribeWithSelector<AppStore>
>(
  subscribeWithSelector(
    (set) =>
      ({
        mode: "embedded",
        setMode: (mode) => set({ mode: mode }),
      } as AppStore)
  )
);

export { useAppStore };
