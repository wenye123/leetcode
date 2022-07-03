/**
 * https://leetcode.cn/problems/squares-of-a-sorted-array/
 */

/**
 * 头尾指针 可以看做是两个有序数组进行归并的过程
 */
export function sortedSquares(nums: number[]): number[] {
  if (nums.length === 0) return [];

  let arr: number[] = [];
  let left = 0,
    right = nums.length - 1,
    endIndex = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      arr[endIndex--] = Math.pow(nums[right], 2);
      right--;
    } else {
      arr[endIndex--] = Math.pow(nums[left], 2);
      left++;
    }
  }

  return arr;
}
