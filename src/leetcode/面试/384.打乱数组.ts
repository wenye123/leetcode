/**
 * https://leetcode.cn/problems/shuffle-an-array/
 */

export class Solution {
  private nums: number[];

  constructor(nums: number[]) {
    this.nums = nums;
  }

  reset(): number[] {
    return this.nums;
  }

  shuffle(): number[] {
    const copyNums = [...this.nums];
    // 从右向左 每次取剩余没比较数字 随机替换
    for (let i = copyNums.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [copyNums[randomIndex], copyNums[i]] = [copyNums[i], copyNums[randomIndex]];
    }
    return copyNums;
  }
}
