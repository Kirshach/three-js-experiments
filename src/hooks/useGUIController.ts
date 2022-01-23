import React, { RefObject } from "react";
import { path } from "src/utils/path";

type GUIType = "number" | "string";

interface GUIParams {
  name: string;
  type?: GUIType;
}

const DEV = import.meta.env.DEV;
// TODO: declare UIL types
// @ts-ignore
let gui = DEV && new (await import("uil")).Gui();

// TODO: declare UIL types
const useGUIController = <T>(
  ref: RefObject<T>,
  pathTo: string[],
  params: GUIParams
) => {
  if (DEV) {
    React.useEffect(() => {
      if (ref.current === null) {
        throw new Error("ref.current is null");
      }
      const prop = pathTo.pop();
      const obj = path(ref.current, pathTo);
      gui.add(obj, prop, params);
    }, []);
  }
};

export { useGUIController };
