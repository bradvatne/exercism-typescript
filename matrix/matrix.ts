export class Matrix {
  nums: number[][];
  constructor(str: string) {
    this.nums = str
      .split("\n")
      .map((item) => item.split(" ").map((num) => parseInt(num)));
  }

  get rows(): number[][] {
    return this.nums;
  }

  get columns(): number[][] {
    let arr: number[][] = [];
    for (let i = 0; i < this.nums.length; i++) {
      arr.push([]);
    }
    for (let item of this.nums) {
      console.log(item);
      for (let num in item) {
        arr[num].push(item[num]);
      }
    }
    return arr;
  }
}
