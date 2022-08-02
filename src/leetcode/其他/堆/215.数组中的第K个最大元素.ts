/**
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/
 */

import { MinHeap } from "../../../base/Heap";

/** 冒泡排序 */
// export function findKthLargest(nums: number[], k: number): number {
//   for (let i = 0; i < k; i++) {
//     for (let j = 0; j < nums.length - 1 - k; j++) {
//       if (nums[j] > nums[j + 1]) {
//         [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
//       }
//     }
//   }
//   return nums[nums.length - k];
// }

/** 堆排序 */
export function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap();
  for (let num of nums) {
    heap.push(num);
    if (heap.size > k) {
      heap.pop();
    }
  }
  return heap.peek();
}

/** 快速排序 */
export function findKthLargest2(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a)[k - 1];
}
