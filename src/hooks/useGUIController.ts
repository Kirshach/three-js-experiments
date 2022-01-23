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
/**
 * @param {RefObject} ref - Reference to a THREE.js object
 * @param {string[]} pathTo - Path to a mutable reactive object
 * @param {GUIParams} params - UIL paramateres object
 */
const useGUIController = <T>(
  ref: RefObject<T>,
  pathTo: string[],
  params: GUIParams
): void => {
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
