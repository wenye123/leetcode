/**
 * https://leetcode.cn/problems/min-stack/
 */

export class MinStack {
  arr: number[] = [];
  minArr: number[] = [];

  push(val: number): void {
    this.arr.push(val);
    if (this.minArr.length === 0) {
      this.minArr.push(val);
    } else {
      this.minArr.push(Math.min(this.minArr[this.minArr.length - 1], val));
    }
  }

  pop(): void {
    this.arr.pop();
    this.minArr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minArr[this.minArr.length - 1];
  }
}
