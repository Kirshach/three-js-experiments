const path = <T>(obj: {}, path: Array<string | number>): T => {
  let val: any = obj;
  for (let i = 0; i < path.length; i++) {
    if (val == undefined) {
      throw new Error(`Can't access property "${path[i]} of ${val}"`);
    }
    val = val[path[i]];
  }
  return val;
};

export { path };
