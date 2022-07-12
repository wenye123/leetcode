/**
 * https://leetcode.cn/problems/binary-search/
 */

export function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    // const mid = Math.floor((left + right) / 2);
    const mid = left + ((right - left) >> 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
