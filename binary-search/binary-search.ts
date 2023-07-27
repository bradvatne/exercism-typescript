export function find(arr: number[], tar: number): number | never {
  const len = arr.length;
  let low = 0;
  let up = len - 1;

  while (low <= up) {
    const mid = Math.floor((low + up) / 2);
    const cur = arr[mid];

    if (cur === tar) return mid;

    if (cur > tar) {
      up = mid - 1;
    } else low = mid + 1;
  }
  throw new Error("Value not in array");
}
