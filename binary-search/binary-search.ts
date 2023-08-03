export function find(arr: number[], tar: number): number | never {
  return _find(arr, tar);
}

const _find = (
  arr: number[],
  tar: number,
  up: number = arr.length - 1,
  low: number = 0
): number | never => {
  const mid = Math.floor((up + low) / 2);
  const cur = arr[mid];
  if (low > up) throw new Error("Value not in array");
  if (cur === tar) {
    return mid;
  } else if (cur < tar) {
    return _find(arr, tar, up, mid + 1);
  } else return _find(arr, tar, mid - 1, low);
};
