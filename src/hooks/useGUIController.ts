import React, { RefObject } from "react";
import { path } from "src/utils/path";

type GUIType = "number" | "string";

interface GUIParams {
  name: string;
  type: GUIType;
}

const DEV = import.meta.env.DEV;
// TODO: declare UIL types
// @ts-ignore
let gui = DEV && new (await import("uil")).Gui();

const useGUIController = <T>(
  ref: RefObject<T>,
  pathTo: (string | number)[],
  params: GUIParams
) => {
  if (DEV) {
    React.useEffect(() => {
      if (ref.current === null) {
        return;
      }
      const prop = pathTo.pop();
      const obj = path(ref.current as T, pathTo);
      gui.add(obj, prop, params);
    }, []);
  }
};

export { useGUIController };
